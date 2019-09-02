new Mongo()
//new Mongo(localhost)
//new Mongo(localhost:27017)

conn = new Mongo();
db = conn.getDB("taxi");

db.drivers.insertMany([
	{
		_id:1,
		firstName:"Big",
		lastName:"Shaq",
		DOB:"02/05/1996",
		address:
			{
				line1:"22",
				line2:"Boom Road",
				city:"London",
				country:"UK",
				postCode:"E1 0AA"
			},
		telephone:"073856386621",
		hireDate:"01/05/2017",
		contractType:"FF",
		car:
			{
				registration:"KFV 413S",
				age:3,
				lastMOTDate:"08/08/2017",
				currentStatus:"roadworthy",
				capacity:4
			},
		shifts:
		[
				{
						shiftDate:"10/12/2017",
						shiftStartTime:"09:00",
						shiftEndTime:"15:00"
				},
				{
						shiftDate:"11/12/2017",
						shiftStartTime:"09:00",
						shiftEndTime:"00:00"
				},
				{
						shiftDate:"13/12/2017",
						shiftStartTime:"09:00",
						shiftEndTime:"00:00"
				}
		],
		revenues:
		[
		{
			payPeriod:2,
			grossEarnings:2000,
			amountPaid:666
		},
		{
			payPeriod:3,
			grossEarnings:2100,
			amountPaid:700
		}	
		]
	},			
	{
		_id:2,
		firstName:"Small",
		lastName:"Deeney",
		DOB:"09/05/1993",
		address:
			{
				line1:"22",
				line2:"Boom Road",
				city:"London",
				country:"UK",
				postCode:"E1 0AA"
			},
		telephone:"07383886621",
		hireDate:"21/06/2016",
		contractType:"POF",
		car: 
			{
				registration:"MDG 328V",
				age:1,
				lastMOTDate:"01/08/2017",
				currentStatus:"roadworthy",
				capacity:7
			},
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"02:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"12/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		},
		{
			shiftDate:"14/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"00:00"
		}
		],
		revenues:
		{
			payPeriod:2,
			grossEarnings:2500,
			amountPaid:833
		}
	},
	{
	    _id:3,
		firstName:"Son",
		lastName:"Naldo",
		DOB:"02/09/1994",
		address:
			{
				line1:"7",
				line2:"Seventh avenue",
				city:"London",
				country:"UK",
				postCode:"E7 0SA"
			},
		telephone:"07498866212",
		hireDate:"29/06/2016",
		contractType:"POF",
		car: 
		{
			registration:"SIG 9374",
			age:2,
			lastMOTDate:"12/08/2017",
			currentStatus:"roadworthy",
			capacity:4
		},
		shifts:
		[
		{
			shiftDate:"01/12/2017",
			shiftStartTime:"10:00",
			shiftEndTime:"22:00"
		},
		{
			shiftDate:"12/12/2017",
			shiftStartTime:"11:00",
			shiftEndTime:"21:00"
		}
		],
		revenues:
		{
			payPeriod:1,
			grossEarnings:2100,
			amountPaid:700
		}
		
	},
	{
		_id:4,
		firstName:"Buk",
		lastName:"Lau",
		DOB:"02/05/1982",
		address:
			{
				line1:"78",
				line2:"South Street",
				city:"Manchester",
				country:"UK",
				postCode:"S1 4GA"
			},
		telephone:"07456396621",
		hireDate:"03/03/2015",
		contractType:"FF",
		car:
		{
			registration:"LVG 215",
			age:3,
			lastMOTDate:"21/08/2017",
			currentStatus:"roadworthy",
			capacity:4
		},
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"01:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"13/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		],
		revenues:
		{
			payPeriod:2,
			grossEarnings:2225,
			amountPaid:741
		}
	},
	{
		_id:5,
		firstName:"Mike",
		lastName:"Jones",
		DOB:"02/05/1986",
		address:
			{
				line1:"41",
				line2:"Fourth avenue",
				city:"Burnley",
				country:"UK",
				postCode:"W11 2PA"
			},
		telephone:"07828866251",
		hireDate:"11/03/2016",
		contractType:"FF",
		car:
		{
			registration:"292 HTD",
			age:1,
			lastMOTDate:"26/07/2017",
			currentStatus:"awaiting repair",
			capacity:7
		},
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"02:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"14/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		],
		revenues:
		{
			payPeriod:1,
			grossEarnings:1800,
			amountPaid:600
		}
	},
	{
		_id:6,
		firstName:"Aysney",
		lastName:"James",
		DOB:"02/11/1997",
		address:
			{
				line1:"75",
				line2:"First avenue",
				city:"Watford",
				country:"UK",
				postCode:"W12 4SL"
			},
		telephone:"07498937621",
		hireDate:"03/01/2016",
		contractType:"POF",
		car: 
		{
			registration:"790 KPF",
			age:1,
			lastMOTDate:"18/09/2017",
			currentStatus:"written off",
			capacity:7
		},
		shifts:
		[
		{
			shiftDate:"04/12/2017",
			shiftStartTime:"22:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"12/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		],
		revenues:
		{
			payPeriod:1,
			grossEarnings:1900,
			amountPaid:633
		}
	},
	{
		_id:7,
		firstName:"John",
		lastName:"White",
		DOB:"12/08/1991",
		address:
			{
				line1:"241",
				line2:"Old Street",
				city:"Hull",
				country:"UK",
				postCode:"21 3A"
			},
		telephone:"073856386621",
		hireDate:"01/05/2016",
		contractType:"FF",
		car: 
		{
			registration:"MHD 6",
			age:5,
			lastMOTDate:"15/09/2017",
			currentStatus:"roadworthy",
			capacity:4
		},
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"00:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"12/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		],
		revenues:
		{
			payPeriod:11,
			grossEarnings:2000,
			amountPaid:666
		}	
	},
	{
		_id:8,
		firstName:"James",
		lastName:"Smith",
		DOB:"22/05/1979",
		address:
			{
				line1:"32",
				line2:"Shrewsbury Road",
				city:"London",
				country:"UK",
				postCode:"SE1 2AH"
			},
		telephone:"07387716624",
		hireDate:"21/06/2015",
		contractType:"FF",
		car:
		{
			registration:"4 TXP",
			age:2,
			lastMOTDate:"21/09/2017",
			currentStatus:"roadworthy",
			capacity:4
		},
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"01:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"15/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		],
		revenues:
		{
			payPeriod:14,
			grossEarnings:2190,
			amountPaid:730
		}
	},
	{
		_id:9,
		firstName:"Wayne",
		lastName:"Bridge",
		DOB:"09/07/1971",
		address:
			{
				line1:"14",
				line2:"SmallBrook Road",
				city:"Newcastcle",
				country:"UK",
				postCode:"N7 4KA"
			},
		telephone:"07496062121",
		hireDate:"14/04/2016",
		contractType:"POF",
		car: 
		{
			registration:"KFX 546F",
			age:3,
			lastMOTDate:"02/03/2017",
			currentStatus:"roadworthy",
			capacity:7
		},
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"23:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"12/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		],
		revenues:
		{
			payPeriod:14,
			grossEarnings:2210,
			amountPaid:736
		}
	},
	{
		_id:10,
		firstName:"Troy",
		lastName:"Maldo",
		DOB:"01/09/1988",
		address:
			{
				line1:"36",
				line2:"Humberstone Gate",
				city:"Leicester",
				country:"UK",
				postCode:"LE1 3YB"
			},
		telephone:"07491573621",
		hireDate:"03/04/2015",
		contractType:"POF",
		car: 
		{
			registration:"OYY 750",
			age:4,
			lastMOTDate:"04/06/2017",
			currentStatus:"awaiting repair",
			capacity:4
		},
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"00:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"12/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		],
		revenues:
		[
		{
			payPeriod:21,
			grossEarnings:2370,
			amountPaid:790
		},
		{
			payPeriod:23,
			grossEarnings:2100,
			amountPaid:700
		}
		]
	}
]);

	
db.operators.insertMany([
	{
		_id:1,
		firstName:"Apu",
		lastName:"Nahasapeemapetilon",
		address:
			{
				"line1":"161",
				"line2":"Kwik e mart",
				"city":"Spring Field",
				"country":"USA",
				"postCode":"65619"
			},
		telephone:"07647382672",
		hireDate:"11/01/2015",
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"00:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"12/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		]
	},
	{
		_id:2,
		firstName:"Asznee",
		lastName:"Husna",
		address:
			{
				line1:"341",
				line2:"Frisbee Road",
				city:"London",
				country:"UK",
				postCode:"E12 5JD"
			},
		telephone:"07648364385",
		hireDate:"01/12/2017",
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"00:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"13/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		]
	},
	{
		_id:3,
		firstName:"Zarah",
		lastName:"Allman",
		address:
			{
				line1:"82",
				line2:"Liverpool Street",
				city:"London",
				country:"UK",
				postCode:"E1 4KJ"
			},
		telephone:"07422785683",
		hireDate:"02/03/2015",
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"00:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"13/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		]
	},
	{
		_id:4,
		firstName:"Caina",
		lastName:"Lees",
		address:
			{
				line1:"31",
				line2:"Third Avenue",
				city:"London",
				country:"UK",
				postCode:"E11 8JL"
			},
		"telephone":"0769264381",
		"hireDate":"03/11/2014",
		shifts:
		[
		{
			shiftDate:"03/12/2017",
			shiftStartTime:"01:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"12/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		]
	},
	{
		_id:5,
		firstName:"Dillon",
		lastName:"Vaghela",
		address:
			{
				line1:"161",
				line2:"Elgin Road",
				city:"London",
				country:"UK",
				postCode:"E11 9KP"
			},
		telephone:"07422738183",
		hireDate:"24/08/2017",
		shifts:
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"03:00",
			shiftEndTime:"09:00"
		}
	},
	{
		_id:6,
		firstName:"Yapi",
		lastName:"Yapo",
		address:
			{
				line1:"23",
				line2:"First avenue",
				city:"London",
				country:"UK",
				postCode:"E12 2QD"
			},
		telephone:"07648891485",
		hireDate:"01/10/2015",
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"23:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"13/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		]
	},
	{
		_id:7,
		firstName:"Inez",
		lastName:"Simon",
		address:
			{
				line1:"12",
				line2:"Mile End Road",
				city:"London",
				country:"UK",
				postCode:"E4 1SJ"
			},
		telephone:"07424865683",
		hireDate:"08/08/2015",
		shifts:
		[
		{
			shiftDate:"10/12/2017",
			shiftStartTime:"00:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"12/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		]
	},
	{
		_id:8,
		firstName:"Buddy",
		lastName:"Gill",
		address:
			{
				line1:"121",
				line2:"Park Sreet",
				city:"Green Field",
				country:"USA",
				postCode:"82719"
			},
		telephone:"07698826712",
		hireDate:"19/11/2016",
		shifts:
		[
		{
			shiftDate:"11/12/2017",
			shiftStartTime:"00:00",
			shiftEndTime:"09:00"
		},
		{
			shiftDate:"13/12/2017",
			shiftStartTime:"09:00",
			shiftEndTime:"02:00"
		}
		]
	}
]);
	
	
db.clients.insertMany([
	{
		_id:1,
		firstName:"Pia",
		lastName:"Hobbs",
		address:
			{
				line1:"22",
				line2:"Mount Lane",
				city:"Manchester",
				country:"UK",
				postCode:"SW1 5HA"
			},
		telephone:"073649386621",
		clientType:"private",
		bookings:
		[
			{
				bookingDate:"10/12/2017",
				bookingTime:"09:00",
				passengers:4,
				pickupAddress:
				[
					{
						line1:"16",
						line2:"Second Avenue",
						city:"London",
						country:"UK",
						postCode:"N3 4FF"
					}
				],
				bookingType:"daily",
				stoppingDestinations:
				[
					{
						line1:"17",
						line2:"Amber Road",
						city:"London",
						country:"UK",
						postCode:"S3 3GB"						
					},
					{
						line1:"223",
						line2:"East Road",
						city:"London",
						country:"UK",
						postCode:"S3 3GB"
					},
					{
						line1:"12",
						line2:"Moon Lane",
						city:"London",
						country:"UK",
						postCode:"S3 3RG"
					}
				],
				payment:
				{
					price:35,
					paymentType:"card",
					billPaid:"true"
				}
			},
			{
				bookingDate:"12/12/2017",
				bookingTime:"10:00",
				passengers:2,
				pickupAddress:
				[
					{
						line1:"31",
						line2:"First Avenue",
						city:"London",
						country:"UK",
						postCode:"S2 4GH"
					}
				],				
				bookingType:"daily",
				stoppingDestinations:
				[
					{
						line1:"334",
						line2:"Church Road",
						city:"Manchester",
						country:"UK",
						postCode:"S5 3GF"
					}
				],
				payment:
				{
					price:55,
					paymentType:"card",
					billPaid:"true"
				}
			}		
		]
	},
	{
		_id:2,
		firstName:"Fraya",
		lastName:"Tillman",
		address:
			{
				line1:"4",
				line2:"Honor Lane",
				city:"Manchester",
				country:"UK",
				postCode:"S3 8HA"
			},
		telephone:"07908886621",
		clientType:"private",
		bookings:
		[
			{
				bookingDate:"10/12/2017",
				bookingTime:"18:00",
				passengers:3,
				pickupAddress:
				[
					{
						line1:"121",
						line2:"Shrewsbury Road",
						city:"London",
						country:"UK",
						postCode:"W3 4TG"
					}
				],
				bookingType:"weekly",
				stoppingDestinations:
					{
						line1:"142",
						line2:"Lower Road",
						city:"London",
						country:"UK",
						postCode:"W3 9FI"
					},
				payment:
				{
					price:25,
					paymentType:"card",
					billPaid:"true"
				}
			},
			{
				bookingDate:"11/12/2017",
				bookingTime:"21:00",
				passengers:1,
				pickupAddress:
				[
					{
						line1:"15",
						line2:"Bancroft Road",
						city:"London",
						country:"UK",
						postCode:"W3 3JN"
					}
				],
				bookingType:"daily",
				stoppingDestinations:
				[
					{
						line1:"32",
						line2:"Bright Road",
						city:"London",
						country:"UK",
						postCode:"W3 4GN"
					}
				],
				payment:
				{
					price:66,
					paymentType:"card",
					billPaid:"true"
				}
			}		
		]
	},
	{
		_id:3,
		firstName:"Selin",
		lastName:"Landry",
		address:
			{
				line1:54,
				line2:"Hind Row",
				city:"London",
				country:"UK",
				postCode:"E3 6KA"
			},
		telephone:"07383863821",
		clientType:"private",
		bookings:
		[
			{
				bookingDate:"13/12/2017",
				bookingTime:"23:00",
				passengers:5,
				pickupAddress:
				[
					{
						line1:"34",
						line2:"Ruskin Avenue",
						city:"London",
						country:"UK",
						postCode:"W3 32G"
					}
				],
				bookingType:"weekly",
				stoppingDestinations:
				[
					{
						line1:"44",
						line2:"Autumn Road",
						city:"London",
						country:"UK",
						postCode:"W13 4RG"
					}
				],
				payment:
				{
						price:38,
						paymentType:"card",
						billPaid:"true"
				}
			},
			{
				bookingDate:"13/12/2017",
				bookingTime:"13:00",
				passengers:6,
				pickupAddress:
				[
					{
						line1:"46",
						line2:"Meanly Road",
						city:"London",
						country:"UK",
						postCode:"W1 3GF"
					}
				],
				bookingType:"monthly",
				stoppingDestinations:
				[
					{
						line1:"55",
						line2:"Gray Road",
						city:"London",
						country:"UK",
						postCode:"W13 4TG"
					},
					{
						line1:"52",
						line2:"King Street",
						city:"London",
						country:"UK",
						postCode:"W13 6YH"
					}
				],
				payment:
				{
					price:45,
					paymentType:"card",
					billPaid:"true"
				}
			}		
		]
	},
	{
		_id:4,
		firstName:"Brax",
		lastName:"Nelson",
		address:
			{
				line1:84,
				line2:"Valley Lane",
				city:"London",
				country:"UK",
				postCode:"E1 5DH"
			},
		telephone:"07382748621",
		clientType:"corporate",
		bookings:
		[
			{
				bookingDate:"02/12/2017",
				bookingTime:"08:00",
				passengers:2,
				pickupAddress:
				[
					{
						line1:"14",
						line2:"Fourth Avenue",
						city:"London",
						country:"UK",
						postCode:"W13 9GG"
					}
				],
				bookingType:"daily",
				stoppingDestinations:
				[
					{
						line1:"41",
						line2:"Angel Street",
						city:"London",
						country:"UK",
						postCode:"W13 7HF"
					},
					{
						line1:"71",
						line2:"Bell Lane",
						city:"London",
						country:"UK",
						postCode:"W13 8HF"
					}
				],
				payment:
				{
					price:65,
					paymentType:"card",
					billPaid:"true"
				}
			}	
		]
	},
	{
		_id:5,
		firstName:"Daniel",
		lastName:"Devine",
		address:
			{
				line1:"94",
				line2:"Central Row",
				city:"London",
				country:"UK",
				postCode:"E4 3DU"
			},
		telephone:"07383821621",
		clientType:"corporate",
		bookings:
		[
			{
				bookingDate:"08/12/2017",
				bookingTime:"12:00",
				passengers:2,
				pickupAddress:
				[
					{
						line1:"71",
						line2:"High Avenue",
						city:"London",
						country:"UK",
						postCode:"W13 4TG"
					}
				],
				bookingType:"daily",
				stoppingDestinations:
				[
					{
						line1:"33",
						line2:"Art Passage",
						city:"London",
						country:"UK",
						postCode:"W1 5GB"
					},
					{
						line1:"39",
						line2:"Sun Street",
						city:"London",
						country:"UK",
						postCode:"W11 4RF"
					}
				],
				payment:
				{
					price:75,
					paymentType:"card",
					billPaid:"true"
				}
			},
			{
				bookingDate:"12/12/2017",
				bookingTime:"10:00",
				passengers:2,
				pickupAddress:
				[
					{
						line1:"215",
						line2:"First Avenue",
						city:"London",
						country:"UK",
						postCode:"W7 8UF"
					}
				],
				bookingType:"daily",
				stoppingDestinations:
					{
						line1:"77",
						line2:"Liberty Road",
						city:"London",
						country:"UK",
						postCode:"W6 9JF"
					},
				payment:
				{
					price:37,
					paymentType:"card",
					billPaid:"true"
				}
			}		
		]
	},
	{
		_id:6,
		firstName:"Angel",
		lastName:"Redfern",
		address:
			{
				line1:42,
				line2:"Ranger Passage",
				city:"London",
				country:"UK",
				postCode:"W21 9DA"
			},
		telephone:"07383885835",
		clientType:"corporate",
		bookings:
		[
			{
				bookingDate:"01/12/2017",
				bookingTime:"07:00",
				passengers:6,
				pickupAddress:
				[
					{
						line1:"79",
						line2:"Bridge Avenue",
						city:"London",
						country:"UK",
						postCode:"W6 6YH"
					}
				],
				bookingType:"monthly",
				stoppingDestinations:
				[
					{
						line1:"57",
						line2:"Bard Lane",
						city:"London",
						country:"UK",
						postCode:"W6 8SK"
					}
				],
				payment:
				{
					price:58,
					paymentType:"card",
					billPaid:"true"
				}
			},
			{
				bookingDate:"14/12/2017",
				bookingTime:"10:00",
				passengers:6,
				pickupAddress:
				[
					{
						line1:"387",
						line2:"Rabbits Road",
						city:"London",
						country:"UK",
						postCode:"W6 3GF"
					}
				],
				bookingType:"daily",
				stoppingDestinations:
					{
						line1:"25",
						line2:"Ebon Road",
						city:"London",
						country:"UK",
						postCode:"W6 3JG"
					},
				payment:
				{
					price:36,
					paymentType:"card",
					billPaid:"true"
				}
			}		
		]
	}
]);


	
db.customerBookings.insertMany([
	{
		_id:1,
		customerName:"John",
		bookingDate:"13/12/2017",
		bookingTime:"11:00",
		passengers:4,
		pickupAddress:
				[
					{
						line1:"26",
						line2:"Oxford Road",
						city:"London",
						country:"UK",
						postCode:"W6 8HF"
					}
				],
		telephone:"07638928496",
		stoppingDestinations:
				[
					{
						line1:"27",
						line2:"Grime Road",
						city:"London",
						country:"UK",
						postCode:"N3 7HB"
					},
					{
						line1:"274",
						line2:"Palm Lane",
						city:"London",
						country:"UK",
						postCode:"N3 3UH"
					},
					{
						line1:"26",
						line2:"Hill Street",
						city:"London",
						country:"UK",
						postCode:"N3 8JF"
					}
				],
		payment:
		{
			price:30,
			paymentType:"card",
			billPaid:"true"
		}
	},
	{
		_id:2,
		customerName:"Joe",
		bookingDate:"13/12/2017",
		bookingTime:"14:00",
		passengers:3,
		pickupAddress:
				[
					{
						line1:"456",
						line2:"Circus Street",
						city:"London",
						country:"UK",
						postCode:"N3 8ED"
					}
				],
		telephone:"07638952684",
		stoppingDestinations:
				[
					{
						line1:"57",
						line2:"Fortune Road",
						city:"London",
						country:"UK",
						postCode:"N3 5UJ"
						
					},
					{
						line1:"47",
						line2:"Ivy Avenue",
						city:"London",
						country:"UK",
						postCode:"N3 8FD"
					}
				],
		payment:
		{
			price:40,
			paymentType:"cash",
			billPaid:"true"
		}
	},
	{
		_id:3,
		customerName:"Smith",
		bookingDate:"13/12/2017",
		bookingTime:"15:00",
		passengers:2,
		pickupAddress:
				[
					{
						line1:"57",
						line2:"Maple Passage",
						city:"London",
						country:"UK",
						postCode:"N3 8JK"
					}
				],
		telephone:"07593157940",
		stoppingDestinations:
				[
					{
						line1:"356",
						line2:"Silver Lane",
						city:"London",
						country:"UK",
						postCode:"N3 2JF"
					},
					{
						line1:"3",
						line2:"Duchess Avenue",
						city:"London",
						country:"UK",
						postCode:"N3 7JS"
					}
				],
		payment:
		{
			price:35,
		paymentType:"card",
		billPaid:"true"
		}
	},
	{
		_id:4,
		customerName:"Mark",
		bookingDate:"14/12/2017",
		bookingTime:"12:00",
		passengers:1,
		pickupAddress:
				[
					{
						line1:"6",
						line2:"Long Road",
						city:"London",
						country:"UK",
						postCode:"SW6 2JF"
					}
				],
		telephone:"07748976271",
		stoppingDestinations:
					{
						line1:"8",
						line2:"Long Passage",
						city:"London",
						country:"UK",
						postCode:"SW6 8DF"
					},
		payment:
		{
			price:10,
			paymentType:"cash",
			billPaid:"true"
		}
	},
	{
		_id:5,
		customerName:"Peter",
		bookingDate:"14/12/2017",
		bookingTime:"21:00",
		passengers:6,
		pickupAddress:
				[
					{
						line1:"45",
						line2:"Quarry Road",
						city:"London",
						country:"UK",
						postCode:"SW6 1KF"
					}
				],
		telephone:"07630243853",
		stoppingDestinations:
					{
						line1:"56",
						line2:"Fountain Lane",
						city:"London",
						country:"UK",
						postCode:"SW6 3FJ"
					},
		payment:
		{
			price:47,
			paymentType:"card",
			billPaid:"false"
		}
	},
	{
		_id:6,
		customerName:"Paulo",
		bookingDate:"02/12/2017",
		bookingTime:"23:00",
		passengers:2,
		pickupAddress:
				[
					{
						line1:"3",
						line2:"Forest Road",
						city:"London",
						country:"UK",
						postCode:"SW6 9J"
					}
				],
		telephone:"0733431292",
		stoppingDestinations:
					{
						line1:"16",
						line2:"Honor Road",
						city:"London",
						country:"UK",
						postCode:"N3 9DH"
					},
		payment:
		{
			price:30,
			paymentType:"card",
			billPaid:"true"
		}
	},
	{
		_id:7,
		customerName:"Yapi",
		bookingDate:"04/12/2017",
		bookingTime:"18:00",
		passengers:1,
		pickupAddress:
				[
					{
						line1:"4",
						line2:"Manor Road",
						city:"London",
						country:"UK",
						postCode:"EW1 7KL"
					}
				],
		telephone:"07109385892",
		stoppingDestinations:
					{
						line1:"5",
						line2:"Fair Avenue",
						city:"London",
						country:"UK",
						postCode:"N3 3FG"
					},
		payment:
		{
			price:58,
			paymentType:"card",
			billPaid:"false"
		}
	},
	{
		_id:8,
		customerName:"Mous",
		bookingDate:"06/12/2017",
		bookingTime:"14:00",
		passengers:2,
		pickupAddress:
				[
					{
						line1:"34",
						line2:"Old Street",
						city:"London",
						country:"UK",
						postCode:"EW1 3SA"
					}
				],
		telephone:"07749385892",
		stoppingDestinations:
					{
						line1:"32",
						line2:"Hope Street",
						city:"London",
						country:"UK",
						postCode:"EW1 3L"
					},
		payment:
		{
			price:40,
			paymentType:"cash",
			billPaid:"true"
		}
	},
	{
		_id:9,
		customerName:"Sidwel",
		bookingDate:"11/12/2017",
		bookingTime:"17:00",
		passengers:3,
		pickupAddress:
				[
					{
						line1:"23",
						line2:"Leyton Road",
						city:"London",
						country:"UK",
						postCode:"EW1 3AF"
					}
				],
		telephone:"07290385892",
		stoppingDestinations:
					{
						line1:"42",
						line2:"Silver Route",
						city:"London",
						country:"UK",
						postCode:"E1 3OF"
					},
		payment:
		{
			price:10,
			paymentType:"card",
			billPaid:"false"
		}
	},
	{
		_id:10,
		customerName:"Mike",
		bookingDate:"11/12/2017",
		bookingTime:"11:00",
		passengers:2,
		pickupAddress:
				[
					{
						line1:"266",
						line2:"North Street",
						city:"London",
						country:"UK",
						postCode:"N3 2FG"
					}
				],
		telephone:"07236895892",
		stoppingDestinations:
		[
					{
						line1:"13",
						line2:"Market Way",
						city:"London",
						country:"UK",
						postCode:"N3 8FJ"
					},
					{
						line1:"34",
						line2:"Carl Street",
						city:"London",
						country:"UK",
						postCode:"N3 4HF"
					}
		],
		payment:
		{
			price:55,
			paymentType:"card",
			billPaid:"true"
		}
	}
]);
	