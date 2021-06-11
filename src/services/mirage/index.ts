import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
    name: string,
    email: string,
    created_at: string
}

export function makeServer() {
    const server = createServer({
        // Banco de dados - fictício //
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(index: number) {
                    return `User ${index + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt() {
                    return faker.date.recent(10, new Date())
                }
            })
        },

        seeds(server) {
            server.createList('user', 10)
        },

        routes() {
            this.namespace = 'api'
            this.timing = 750 // Delay // 

            this.get('/users')
            this.post('/users')

            this.namespace = ''
            this.passthrough()
        }
    })

    return server
}