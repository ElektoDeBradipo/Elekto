const koa = require("koa");
const koaRouter = require("koa-router");
const koaBody = require("koa-bodyparser");
const { graphqlKoa, graphiqlKoa } = require("apollo-server-koa");

const schema = require("./src/schema");

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

// koaBody is needed just for POST.
app.use(koaBody());

router.post("/graphql", graphqlKoa({ schema }));
router.get("/graphql", graphqlKoa({ schema }));
// Setup the /graphiql route to show the GraphiQL UI
router.get(
    "/graphiql",
    graphiqlKoa({
        endpointURL: "/graphql", // a POST endpoint that GraphiQL will make the actual requests to
    })
);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
