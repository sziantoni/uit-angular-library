const ROUTING_ELEMENT = 'route-animations-elements';
const ROUTING_ELEMENT_SECOND_LEVEL = 'route-animations-elements-2-level';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, keyframes, group, animation,
} from '@angular/animations';


export const fadeBack = trigger('fadeBack', [
  transition('* <=> *', [
    query(':enter' ,
      style({
        opacity: 0,
        position: 'fixed'
      }), {optional: true} ),
    query(':leave' ,
      style({
        position: 'relative'
      }), {optional: true} ),
    query(':enter .' + ROUTING_ELEMENT , style({
      opacity: 0
    }) , {optional: true}),
    sequence([
    query(
      ':leave .' + ROUTING_ELEMENT, [
        stagger(-50, [
          animate('{{leaveTR}}s {{leaveDR}}s ease-out', keyframes([
            style({ transform: 'scale(1)',  opacity: 1, offset: 0 }),
            style({transform: 'scale(0.5)',   opacity: 0, offset: 1 })
          ]))
        ])], { optional: true }
    ),
      query(':leave', [
          animate('{{leaveT}}s {{leaveD}}s ease-out', keyframes([
              style({ transform: 'scale(1)',  opacity: 1, offset: 0, position: 'fixed'}),
              style({transform: ' scale(0.5)',   opacity: 0, offset: 1, position: 'fixed'})
            ])
          )
        ], {optional: true} ) ,
      query(':enter', [
            animate('{{enterT}}s {{enterD}}s ease-out', keyframes([
              style({ transform: 'scale(0.5)', opacity: 0, offset: 0}),
              style({transform: 'scale(1)',  opacity: 1, offset: 1, position: 'relative'}),
            ]))
          ], {optional: true} ),
        query(':enter .' + ROUTING_ELEMENT, [
            stagger( 200, [
              animate('{{enterTR}}s {{enterDR}}s ease-out', keyframes([
                style({ transform: 'scale(0.5)', opacity: 0, offset: 0}),
                style({transform: 'scale(1)',  opacity: 1, offset: 1}),
                ])
            )
          ] )], {optional: true} )])

  ], {params: {enterT: '0.6', leaveT: '0.5',  enterD: '0', leaveD: '0', enterTR: '0.6', enterDR: '0', leaveTR: '0.3', leaveDR: '0'} })
]);



