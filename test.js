db.eshops.find().forEach(function (d) {
  db.production.updateOne(
    {
      _id: d._id,
    },
    {
      $set: { configuration: { hello: 'hello World' } },
      //to remove
      // $unset: {
      //   content: 1,
      // },
    }
  );
});

// update all documents and set new
db.eshops.updateMany(
  {},
  {
    $set: { configuration: { hello: 'hello World' } },
    //to remove
    // $unset: {
    //   content: 1,
    // },
  },
  { upsert: true, multi: true }
);
