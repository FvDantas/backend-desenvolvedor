const Sequelize = require(`sequelize`)
const sequelize = new Sequelize(`produto`,`root`,`pass123456`,{
    host: `localhost`,
    dialect: `mysql`
})

sequelize.authenticate().then(() =>{
    console.log(`Conexao realizada com sucesso!`)
}).catch((erro)=>{
    console.log(`Falha ao se conectar: ${erro}`)
})