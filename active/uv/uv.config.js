// UV config

// L bare stealers, we use wisp ;)
//  ⠀⠀⠀       ⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//  ⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⠟⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀
//  ⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣳⠖⠳⣄⡀⠀⠀⠀⠀⠀⠀
//  ⠀⠀⠀⠀⡤⠒⠀⠂⡾⠉⠀⠀⠀⠀⠉⢳⡄⣄⡀⠀⠀
//  ⠀⠀⠀⢸⡥⠀⣀⡼⢁⠀⢰⡄⠀⡄⠀⠀⣧⠀⠙⡆⠀
//  ⠀⢀⣠⠼⠗⠚⠉⠠⠋⠀⠀⢷⣠⣧⠀⠀⠈⠳⢤⣇⠀
//  ⠀⣾⣟⠒⠦⣄⠀⠀⠀⣠⡴⠋⠁⢈⠛⢦⣄⣠⣴⣾⣷
//  ⢀⡟⠙⢶⣤⠬⠷⣼⡏⠉⠉⢩⡍⠹⠦⢤⣿⣤⣨⣿⠈
//  ⡾⣡⠆⠁⠀⠀⠀⢠⡀⠀⠀⠀⢱⡀⠀⠂⠙⠎⠻⡅⠀
//  ⢿⠁⠒⣤⠤⣤⣀⠀⢧⠀⠀⠀⣸⠃⠀⠀⠀⡶⣤⣽⠀
//  ⠈⠳⣴⡇⠀⠀⠈⠛⢦⣄⣠⠾⢿⣄⣀⣠⠾⣡⠞⠁⠀
//  ⠀⠀⠈⠉⠉⠉⠁⢧⢠⠟⣽⠀⢿⠀⢧⢰⡈⠀⠀⠀⠀
//  ⠀⠀⠀⠀⠀⠀⠐⢫⠏⢸⠁⠀⠈⢳⠘⢧⣙⢦⠀⠀⠀

self.__uv$config = {
  prefix: "/UV-Static-2.0/active/uv/service/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/UV-Static-2.0/active/uv/uv.handler.js",
  client: "/UV-Static-2.0/active/uv/uv.client.js",
  bundle: "/UV-Static-2.0/active/uv/uv.bundle.js",
  config: "/UV-Static-2.0/active/uv/uv.config.js",
  sw: "/UV-Static-2.0/active/uv/uv.sw.js",
};
