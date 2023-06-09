import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy';
import { PlanetSchema } from '../models/Planet';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Planet = mongoose.model('Planet', PlanetSchema)
  Galaxy = mongoose.model('Galaxy', GalaxySchema)
}

export const dbContext = new DbContext()
