import {
  trigger,
  transition,
  style,
  query,
  animate,
 sequence, stagger, animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';

const ROUTING_ELEMENT = 'route-animations-elements';

const rotateSx = animation([
  query(':enter, :leave', [
    style({
      position: 'fixed',
      width: '100%',
      opacity: 0
    })
  ], { optional: true}),
  query(':enter .' + ROUTING_ELEMENT, style({ opacity: 0}), {
    optional: true
  }),
  sequence([
    query(':leave', [
      style({opacity : 1 , transformOrigin: 'left bottom', transform: 'translate3d(0,0,0)'}),
      animate( '{{leaveT}}s {{leaveD}}s ease-in' ,
        style({opacity: 0.5 , transform: ' rotate3d(0,0,1,90deg) translate3d(50%,0,0)' , transformOrigin: 'left bottom'})
      )
    ], {optional: true }),
    query(':enter ', stagger( 0, [
      style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 90deg)'}),
      animate('{{enterT}}s {{enterD}}s  ease-out',
        style({opacity: 1, transformOrigin: 'left bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
    ]), {optional: true })
  ]),
  query(':enter .' + ROUTING_ELEMENT, stagger( 75, [
    style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 90deg)'}),
    animate('{{enterTR}}s {{enterDR}}s ease-out',
      style({opacity: 1, transformOrigin: 'left bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
  ]), {optional: true })
]);


export function rotateSxAnimation_setParametres(
  entert: string ,
  enterd: string,
  leavet: string,
  leaved: string,
  entertr: string,
  enterdr: string): AnimationTriggerMetadata {
  return trigger('rotateSx', [
    transition('* <=> *', useAnimation(rotateSx), {params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved,
        enterTR: entertr,
        enterDR: enterdr} })
  ]);
}

export function rotateSxAnimation(): AnimationTriggerMetadata {
  return trigger('rotateSx', [
    transition('* <=> *', useAnimation(rotateSx), {params: {
        enterT: '0.5',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0',
        enterTR: '0.5',
        enterDR: '0'} })
  ]);
}
