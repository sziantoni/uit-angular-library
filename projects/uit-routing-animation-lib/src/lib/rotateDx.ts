import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';

const ROUTING_ELEMENT = 'route-animations-elements';

const rotateDx = animation([
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
          style({opacity : 1 , transformOrigin: 'right bottom', transform: 'translate3d(0,0,0)'}),
          animate( '{{leaveT}}s {{leaveD}}s ease-in' ,
            style({opacity: 0.5 , transform: ' rotate3d(0,0,1,-90deg) translate3d(-50%,0,0)' , transformOrigin: 'right bottom'})
          )
        ], {optional: true }),
        query(':enter ', stagger( 0, [
          style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -90deg)'}),
          animate('{{enterT}}s {{enterD}}s  ease-out',
            style({opacity: 1, transformOrigin: 'right bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
        ]), {optional: true })
      ]),
      query(':enter .' + ROUTING_ELEMENT, stagger( 75, [
        style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -90deg)'}),
        animate('{{enterTR}}s {{enterDR}}s ease-out',
          style({opacity: 1, transformOrigin: 'right bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
      ]), {optional: true })
   ]);


export function rotateDxAnimation_setParametres(
  entert: string ,
  enterd: string,
  leavet: string,
  leaved: string,
  entertr: string,
  enterdr: string): AnimationTriggerMetadata {
  return trigger('rotateDx', [
    transition('* <=> *', useAnimation(rotateDx), {params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved,
        enterTR: entertr,
        enterDR: enterdr} })
  ]);
}

export function rotateDxAnimation(): AnimationTriggerMetadata {
  return trigger('rotateDx', [
    transition('* <=> *', useAnimation(rotateDx), {params: {
        enterT: '0.5',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0',
        enterTR: '0.5',
        enterDR: '0'} })
  ]);
}
