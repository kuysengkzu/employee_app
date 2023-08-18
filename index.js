const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const schema_mongoose = require('mongoose');
const EmployeeSchema = schema_mongoose.Schema(
  {
    empid: { type: Number },
    name: { type: String },
    emailid: { type: String },
    password: { type: String}
  },
  {
    timestamps: true
  }
);
EmployeeModel = schema_mongoose.model('employees', EmployeeSchema);


// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() =>console.log('MongoDB Connected'))
  .catch(err => console.log(err));


//  REST APIs
app.post('/employees', (req, res) => {
  const employee = new EmployeeModel({
    empid: req.body.empid,
    name: req.body.name,
    emailid: req.body.email,
    password: req.body.password
  });

  employee.save()
    .then( (record) => res.status(200).send( { message: `${record.name} created successfully` }));
});

app.get('/employees', (_, res) => {
  EmployeeModel.find({})
    .then(records => res.send(records))
    .catch(err => res.status(404).json({ error: err }));
});

app.get('/employees/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const record = await EmployeeModel.findOne({ "empid": id });
  if (record) {
    res.send({employee: record})
  } else {
    res.status(404).send({ error: `Employee (ID: ${id}) not found!`});
  }
});

app.delete('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  EmployeeModel.findOneAndRemove({ "empid": id })
    .then(record => {
      if (record != null) {
        res.status(200).send({ message: 'Employee remove successfully!' });
      }
      else {
        res.status(404).send({error: `Employee (id: ${id}) not found or already deleted`});
      }
    })
    .catch(err => {
      return res.status(500).send({ error: err });
    })
});

app.post('/login', async (req, res) => {
  const record = await EmployeeModel.findOne({ "name": req.body.name, "password": req.body.password});
  if(record) {
    return res.status(200).send({ message: "Login Successfully."});
  } else {
    res.status(403).send({ error: "Fail to login. Wrong name or password!"});
  }
});

const port = 3000;
app.listen(port, () => console.log('Server running at port no 3000'));