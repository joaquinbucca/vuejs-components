class CalendarEvent {
  /*!
   * Calendar event constructor from TimeOffRequest obj
   * @param  {TimeOffRequest} tor TimeOffRequest
   */
  constructor(evt) {
    this.id = evt.id;
    this.start = evt.start;
    this.end =  evt.end;
    this.title = evt.title;
  }
}

export default CalendarEvent;