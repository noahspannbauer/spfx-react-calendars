import * as React from 'react';
import styles from './Calendars.module.scss';
import { ICalendarsProps } from './ICalendarsProps';

const Calendars: React.FC<ICalendarsProps> = (props: ICalendarsProps) => {
  return <div>Hello!</div>;
};

export default Calendars;

// export default class Calendars extends React.Component<ICalendarsProps, {}> {
//   public render(): React.ReactElement<ICalendarsProps> {
//     return (
//       <div className={ styles.calendars }>
//         <div className={ styles.container }>
//           <div className={ styles.row }>
//             <div className={ styles.column }>
//               <span className={ styles.title }>Welcome to SharePoint!</span>
//               <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
//               <p className={ styles.description }>{escape(this.props.description)}</p>
//               <a href="https://aka.ms/spfx" className={ styles.button }>
//                 <span className={ styles.label }>Learn more</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
