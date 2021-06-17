export default {
    pagination(data, callback) {
        let page = {
            onChange: (current) => {
                callback(current)
            }
        }
    }
}