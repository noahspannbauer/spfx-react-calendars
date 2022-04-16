export interface IEvent {
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  borderColor: string;
  extendedProps: {
    siteId: string;
    listId: string;
    listItemId: string;
  };
}
