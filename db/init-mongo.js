

db.createUser({
    user: "admin00",
    pwd: "admin00",
    roles: [
      {
        role: "readWrite",
        db: "mbookings",
      },
    ],
});
