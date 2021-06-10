import { createServer, Model } from 'miragejs'

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