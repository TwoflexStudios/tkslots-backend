const { execSync } = require("child_process");
const glob = require("glob");
const path = require("path");

const protoFiles = glob.sync("src/protobuff/**/*.proto");
const gameProtoFiles = glob.sync("src/protobuff/games/**/*.proto");

if (protoFiles.length === 0) {
  console.log("Nenhum arquivo .proto encontrado.");
  process.exit(0);
}

// Corrige paths com barra invertida para barra normal (Windows safe)
const fixedProtoFiles = protoFiles.map(p => p.replace(/\\/g, "/")).join(" ");
const fixedGameProtoFiles = gameProtoFiles.map(p => p.replace(/\\/g, "/")).join(" ");
const protocGenTsProto = path.resolve("node_modules/.bin/protoc-gen-ts_proto.cmd").replace(/\\/g, "/");

const command = `npx protoc \
  --plugin=protoc-gen-ts_proto="${protocGenTsProto}" \
  --ts_proto_out=./src/types/protobuff \
  --ts_proto_opt=outputServices=grpc-js,esModuleInterop=true \
  -I src/protobuff \
  ${fixedProtoFiles}`;

const gameCommand = `npx protoc \
  --plugin=protoc-gen-ts_proto="${protocGenTsProto}" \
  --ts_proto_out=./src/types/protobuff/ \
  --ts_proto_opt=outputServices=grpc-js,esModuleInterop=true \
  -I src/protobuff/games \
  ${fixedGameProtoFiles}`;

console.log("Executando:", command);
execSync(command, { stdio: "inherit", shell: true });
console.log("Executando:", gameCommand);
execSync(gameCommand, { stdio: "inherit", shell: true });
