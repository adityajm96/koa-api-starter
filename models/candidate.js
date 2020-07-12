'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Candidate.associate = function(models) {
    Candidate.belongsToMany(models.Job,{
      through:'Application'
    })
  };
 
  return Candidate;
};