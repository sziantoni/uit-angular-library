const ROUTING_ELEMENT = 'route-animations-elements';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, keyframes,  animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';


const fadeBack = animation([
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
  ])
;
export function fadeBackAnimation_setParametres(
  entert: string ,
  enterd: string,
  leavet: string,
  leaved: string,
  entertr: string,
  leavetr: string,
  enterdr: string,
  leavedr: string ): AnimationTriggerMetadata {
  return trigger('fadeBack', [
    transition('* <=> *', useAnimation(fadeBack), {params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved,
        enterTR: entertr,
        leaveTR: leavetr,
        enterDR: enterdr,
        leaveDR: leavedr} })
  ]);
}

export function fadeBackAnimation(): AnimationTriggerMetadata {
  return trigger('fadeBack', [
    transition('* <=> *', useAnimation(fadeBack), {params: {
        enterT: '0.6',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0',
        enterTR: '0.6',
        leaveTR: '0.5',
        enterDR: '0',
        leaveDR: '0'} })
  ]);
}
