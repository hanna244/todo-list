import axios from '.'

export default class SampleProductsService {
  static async categories() {
    return await axios.get('products/categories')
  }
}
