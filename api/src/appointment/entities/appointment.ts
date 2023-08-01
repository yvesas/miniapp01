
export interface AppointmentProps {
  customerId: string
  customerName: string
  startsAt: Date
  endsAt: Date
}

export class Appointment {
  private props: AppointmentProps

  get customerId () {
    return this.props.customerId
  }
  get customerName () {
    return this.props.customerName
  }
  get startsAt () {
    return this.props.startsAt
  }
  get endsAt () {
    return this.props.endsAt
  }

  constructor(props:AppointmentProps){
    const {startsAt, endsAt} = props
    
    if(startsAt <= new Date()){
      throw new Error('Invalid start date.')
    }

    if(endsAt <= startsAt){
      throw new Error('Invalid end date.')
    }

    this.props = props
  }
}