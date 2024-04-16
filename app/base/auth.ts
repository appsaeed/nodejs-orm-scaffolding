export default {

    login: function (username: string, password: string) {
        return true;
    },

    user: async () => {
        return {
            username: 'Nodejs',
            password: 'hidden'
        }
    }
}