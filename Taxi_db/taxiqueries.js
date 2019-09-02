//1. get all drivers with contract type FF
db.drivers.find({"contractType":"FF"})

//2. get all clients with type private
db.clients.find({"clientType":"private"})

//3. get drivers with shift start time 12am
db.drivers.find({"shifts.shiftStartTime":{$eq:"00:00"}}, {"firstName":1,"lastName":1,_id:0})

//4. get customer bookings with bill outstanding 
db.customerBookings.find({"payment.billPaid":"false"})

//5. get shifts of given driver name
db.drivers.find({"firstName":"Big", "lastName":"Shaq"}, {"shifts":1,_id:0})

//6. get list of car with 7 seats
db.drivers.find({"cars.capacity":7})

//7. get booking info for given date
db.customerBookings.find({"bookingDate":"13/12/2017"})

//8. get booking with price greater than 40
db.customerBookings.find({"payment.price":{$gt:40})

//9. get cars that are roadworthy
db.drivers.find({"car.currentStatus":"roadworthy"}, {"car":1,_id:0})

//10. get telephone of given driver
db.drivers.find({"firstName":"Big", "lastName":"Shaq"}, {"telephone":1,_id:0})

//11. get all bookings
db.clients.find({},{bookings:1})

//12. get all drivers contributing to revenue in a specific pay period (2 in this case)
db.drivers.find({"revenues.payPeriod":{$eq:2}}, {"firstName":1,"lastName":1,_id:0})

//13. get all bookings of a given type (daily, weekly or monthly) in this case daily
db.clients.aggregate([
	{
		$project: 	  {
			bookings: {
				$filter: {
					input:"$bookings", 
					as:"a", 
					cond: { $eq: [ "$$a.bookingType", "daily" ] }
				}
			}
		}
	}
])
//14. get all bokings costing over £X (40 in this case)
db.clients.aggregate([
	{
		$project: 	  {
			bookings: {
				$filter: {
					input:"$bookings", 
					as:"a", 
					cond: { $gt: [ "$$a.payment.price", 40 ] }
				}
			}
		}
	}
])
//15 sort customers by highehst costing journey
db.customerBookings.find({}, {"customerName":1, "payment.price":1}).sort({"payment.price": -1})
