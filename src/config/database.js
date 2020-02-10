module.exports = {
  dialect: 'postgres',
  // IP do Docker:
  host: '172.17.0.2', 
  // Porta do Docker:
  port: '5432',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
