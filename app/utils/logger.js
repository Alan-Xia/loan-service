'use strict'

import {createLogger,transports,format} from 'winston'
const myFormat = format.printf(log => {
  return `${log.timestamp} ${log.level}: ${log.message}`
})

const loggeer = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({filename: './logs/applog.log'})
  ]
})

export default loggeer