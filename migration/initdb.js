var user = user || null;
var password = password || null;
var admin = admin || null

if(!user || !password || !admin) {
	print("usage is : mongo --eval \"var admin='[admin pwd]', user='[user]', password='[pwd]';\" migration/initdb.js");

} else {

	db = connect("localhost:27017/admin");

	if(db.system.users.find({user:'root'}).count() === 0) {
		db.createUser(
			{
				user: "root",
			    pwd: admin,
			    roles: [ "root" ]
			}
		);
	}

	db = db.getSiblingDB('humeurathon');
	if(db.system.users.find({user:'dev'}).count() === 0) {
		db.createUser({
			user: user,
		    pwd: password,
		    roles: [ { role: "readWrite", db: "humeurathon" } ]
		});
	} else {
		
		db.grantRolesToUser("dev", [{ role: "readWrite", db: "humeurathon" }]);
	}

}
