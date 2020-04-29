const ROUTING_ELEMENT = 'route-animations-elements';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, keyframes,  animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';

export const fadeBackLeaveParam = animation([
  query(':leave' ,
    style({
      position: 'relative'
    }), {optional: true} )
]);

export const fadeBackEnterParams = animation([
  query(':enter' ,
    style({
      opacity: 0,
      position: 'fixed'
    }), {optional: true} ),
  query(':enter .' + ROUTING_ELEMENT , style({
    opacity: 0
  }) , {optional: true}),
]);

export const fadeBackLeavePart = animation([
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
]);


export const fadeBackEnterPart = animation([
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
    ] )], {optional: true} )
]);

const fadeBackA = animation([
    useAnimation(fadeBackEnterParams),
    useAnimation(fadeBackLeaveParam),
  sequence([
      useAnimation(fadeBackLeavePart),
      useAnimation(fadeBackEnterPart)
])
  ])
;
export function fadeBack_customSpeed(speed: string): AnimationTriggerMetadata {
  switch (speed){
    case ('medium') : {
      return trigger('fadeBack', [
        transition('* <=> *', useAnimation(fadeBackA), {params: {
            enterT: '0.6',
            leaveT: '0.5',
            enterD: '0',
            leaveD: '0',
            enterTR: '0.6',
            leaveTR: '0.5',
            enterDR: '0',
            leaveDR: '0'}})
      ]);
    }
    case ('low') : {
      return trigger('fadeBack', [
        transition('* <=> *', useAnimation(fadeBackA), {params: {
            enterT: '1.2',
            leaveT: '0.8',
            enterD: '0',
            leaveD: '0',
            enterTR: '1.2',
            leaveTR: '1',
            enterDR: '0',
            leaveDR: '0'} })
      ]);
    }
    case ('high') : {
      return trigger('fadeBack', [
        transition('* <=> *', useAnimation(fadeBackA), {params: {
            enterT: '0.3',
            leaveT: '0.2',
            enterD: '0',
            leaveD: '0',
            enterTR: '0.3',
            leaveTR: '0.2',
            enterDR: '0',
            leaveDR: '0'} })
      ]);
    }}}

export function fadeBack(): AnimationTriggerMetadata {
  return trigger('fadeBack', [
    transition('* <=> *', useAnimation(fadeBackA), {params: {
        enterT: '0.6',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0',
        enterTR: '0.6',
        leaveTR: '0.5',
        enterDR: '0',
        leaveDR: '0'} })
  ]); }


