process.env.VUE_APP_API_URL = "http://localhost:3000/api";
// process.env.VUE_APP_PROJECT_ID = "600c3c79245fa93878cf4955";
process.env.VUE_APP_PROJECT_ID = "ID_PROJECT";

module.exports = {
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              let name = "ProjectName"
              args[0].title = name[0].toUpperCase() + name.slice(1).toLowerCase();
              return args;
          })
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
