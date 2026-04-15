use("studentrecords")
db.dropDatabase("studentrecords")
db.students.insertMany([
  { _id: 1, studentnumber: 67843257, name: "Jean Luc Picard", currentyear: 1, programme_id: 1,results:[{year:1, mark:80}] },
  { _id: 2, studentnumber: 67555257, name: "Commander Data", currentyear: 2, programme_id: 2, results:[{year:1, mark:80},{year:2, mark:90}] },
  { _id: 3, studentnumber: 67843666, name: "Deanna Troy", currentyear: 2, programme_id: 1, results:[{year:1, mark:20},{year:2, mark:30}]},
  { _id: 4, studentnumber: 99943257, name: "Beverley Crusher", currentyear: 1, programme_id: 3, results:[{year:1, mark:60}] },
  { _id: 5, studentnumber: 67843333, name: "William Riker(Number 1) ", currentyear: 2, programme_id: 2, results:[{year:1, mark:40},{year:2, mark:50}] }
])

db.courses.insertMany([
  { _id: 1, title: "Creative Computing", duration: 3 , department:"Computing", campus : "Waterford"},
  { _id: 2, title: "Security & Forensics", duration: 3, department:"Computing", campus : "Carlow"},
  { _id: 3, title: "Computer Science", duration: 4, department:"Computing", campus : "Waterford" }
])

use("studentrecords")
db.students.find()
use("studentrecords")
db.courses.find()


