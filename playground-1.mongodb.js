use ("bloodDonation")
db.dropDatabase();

db.patients.insertMany([
    {

"PatientID": "781028",
"Name": "Mary Jane",
"DOB": ISODate("1990-05-15"),
"PhoneNo": 1234567890,
"Email": "mary.jane@outlook.com",
"Gender": "Female",
"BloodType": "A+",

    }
,

"Medical History": [{
    "Name": "Heart Disease",
    "Desc": "Chronic heart disease, diagnosed in 2015",
}],


"Address": {
    "Country": "Ireland",
    "County": "Cork",
    "City": "Cork City",
    "Street": "123 Main Street"
},

"Donor History": [{
    "Location": "Cork City Hall",
    "VolumeMl":500,
    "Time": 10:00,
    "Date": ISODate("2023-08-15")
}]

]);