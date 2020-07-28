const { functionsIn } = require("lodash");

var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	pug = require("pug"),
	Esri = require("./models/esri.js")

//MIDDLEWARE for Authentication

function isAuthenticated(req,res,next){
//check whether logged in
// if they are, attach the user to request object and then call next
// if not send redirect to login page 
// with a message saying log in
}

//MONGO CONFIGRATION
 var uri = process.env.DATABASEURI || "mongodb+srv://sudhanshumohan:hesoyam@cluster0-3z3hj.mongodb.net/hospital_data?retryWrites=true&w=majority"

mongoose.connect(uri,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useUnifiedTopology:true
}).then(()=>{
	console.log("Connected to Database");
}).catch(err =>{
	console.log("ERROR:",err.message);
});

//==========================
//SOME OTHER PACKAGES CONFIG
//==========================

app.set("view engine","ejs");
//setting view engine to ejs
app.use(express.static(__dirname + '/public'));
//serving custom resources
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//using bodyparser so recieve req object

//Serving HomePage
app.get("/",function(req,res){
	res.render("about.ejs");
});
app.get("/map",function(req,res){
	Esri.find({},function(err,foundObj){
		if(err){
			console.log(err);
		} else {
			res.render("index.ejs",{foundArr:foundObj});
		}
	}).limit(100);
	});
app.get("/technology",function(req,res){
	res.render("technology.ejs");
});
app.get("/contact",function(req,res){
	res.render("contact.ejs");
});
app.get("/login",function(req,res){
	res.render("login.ejs");
});

app.get('/dashboard',isAuthenticated,function(req,res){
	res.render('dashboard.ejs');
});

// ======== plasma bank ========= //
app.get("/index_plasma",function(req,res){
	res.render("index_plasma.ejs");
});
app.get("/amenities",function(req,res){
	res.render("amenities.ejs");
});
app.get("/form_donor",function(req,res){
	res.render("form_donor.ejs");
});
app.get("/form_patient",function(req,res){
	res.render("form_patient.ejs");
});
app.get("/plasma_form",function(req,res){
	res.render("common_pool.ejs");
});
app.get("/plasma_bank",function(req,res){
	res.render("plasma_bank.ejs");
});
//==========AJAX TESTING ROUTES =========

app.get("/test",function(req,res){
	res.render("test.ejs");
});

//========API Routes============//
//========THIS API GETS ALL THE DATA===========//
app.get("/api/getall",function(req,res){
	Esri.find({},function(err,data){
		if(err){
			res.send(err);
		} else {
			res.send(data);
		}
	}).limit(10);
});
//========THIS SEARCHES FOR A SPECIFIC MONGO ID=========//
app.get("/api/",(req,res) =>{
	var _id = req.query._id;
	Esri.findById(_id,function(err,data){
		if(err){
			res.send(err);
		} else {
			res.send(data);
		}
	})
});
//===========THIS API Route Searches and Updates the document ============//
app.put("/api/",(req,res)=>{
	Esri.findByIdAndUpdate(req.body._id,req.body,{upsert:false,new:true},function(err,updatedObject){
		if(err){
			console.log(err);
		} else {
			res.send(updatedObject);
		}
	})
});
//=================THIS API Creates New Documents================//
app.post("/api/",(req,res)=>{
	var newEsri = new Esri({
	X:req.body.X,
	Y:req.body.Y,
	FID:req.body.FID,
	HOSPITAL_NAME:req.body.HOSPITAL_NAME,
	HOSPITAL_TYPE:req.body.HOSPITAL_TYPE,
	HQ_ADDRESS:req.body.HQ_ADDRESS,
	HQ_CITY:req.body.HQ_CITY,
	HQ_STATE:req.body.HQ_STATE,
	HQ_ZIP_CODE:req.body.HQ_ZIP_CODE,
	COUNTY_NAME:req.body.COUNTY_NAME,
	STATE_NAME:req.body.STATE_NAME,
	FIPS:req.body.FIPS,
	NUM_LICENSED_BEDS:req.body.NUM_LICENSED_BEDS,
	NUM_STAFFED_BEDS:req.body.NUM_STAFFED_BEDS,
	NUM_ICU_BEDS:req.body.NUM_ICU_BEDS,
	ADULT_ICU_BEDS:req.body.ADULT_ICU_BEDS,
	PEDI_ICU_BEDS:req.body.PEDI_ICU_BEDS,
	BED_UTILIZATION:req.body.BED_UTILIZATION,
	Potential_Increase_In_Bed_Capac:req.body.Potential_Increase_In_Bed_Capac,
	AVG_VENTILATOR_USAGE:req.body.AVG_VENTILATOR_USAGE	
	});
	if(newEsri.HOSPITAL_NAME && newEsri.COUNTY_NAME && newEsri.STATE_NAME && newEsri.HQ_CITY && newEsri.HQ_STATE){
		newEsri.save(function(err,obj){
			if(err){
				console.log(err);
			} else {
				res.send(obj);
			}
		})
	} else {
		res.send("ERROR SMK-1");
	}

});
//==================DELELTE BY ID=============//
app.delete("/api/",(req,res)=>{
	Esri.findByIdAndRemove(req.body._id,function(err,deletedObj){
		if(err){
			console.log(err);
		} else {
			res.send(deletedObj);
		}
	})
});
//=============Fuzzy Search based on raw data ==========//

app.get("/api/fuzzy",(req,res) =>{
	var COUNTY_NAME = req.query.COUNTY_NAME;
	var STATE_NAME = req.query.STATE_NAME;
	var HOSPITAL_NAME = req.query.HOSPITAL_NAME;
	var HQ_CITY = req.query.HQ_CITY;
	Esri.find({STATE_NAME:{$regex:STATE_NAME,$options:"$i"},COUNTY_NAME:{$regex:COUNTY_NAME,$options:"$i"},HOSPITAL_NAME:{$regex:HOSPITAL_NAME,$options:"$i"},HQ_CITY:{$regex:HQ_CITY,$options:"$i"}},function(err,data){
		if(err){
			res.send(err);
		} else {
			res.send(data);
		}
	})
});


//===============get request Fallback===========//

app.get("*", (req,res) => {
    res.render("404.ejs");
  });


//========================//
//LISTENER PROCESS
var port = process.env.PORT || 31000
app.listen(port,process.env.IP,function(){
	console.log("Server started at port:"+port);
});
