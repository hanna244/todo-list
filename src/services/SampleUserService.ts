import axios from '.'

import * as userInfoType from '@/types/sampleUserProfileType'

export default class SampleUserService {
  static async profile(params: userInfoType.RequestDataType) {
    return await axios.get(`/users/${params.id}`, { params })
  }
}
