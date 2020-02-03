module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber_database',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
