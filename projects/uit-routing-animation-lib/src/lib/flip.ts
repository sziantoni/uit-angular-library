const ROUTING_ELEMENT = 'route-animations-elements';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';


const flipA = animation([
    query(':enter .' + ROUTING_ELEMENT, style({
      opacity: 0
    }), { optional: true}),
    query(':leave' , style({
      position: 'relative'
    }), { optional: true}),
    query(':enter', style({
      opacity: 0,
      position: 'fixed'
    }), { optional: true} ),
      sequence([
      query(
        ':leave .' + ROUTING_ELEMENT,
        stagger(-200, [
          style({ transform: 'perspective(3000px) rotate3d(0, 1, 0, 0)', position: 'relative',  opacity: 1, flex: 'inherit' }),
          animate(
            '{{leaveTR}}s {{leaveDR}}s ease-in',
            style({transform: 'perspective(2000px) rotate3d(0, 1, 0, 90deg)',
              opacity: 0, offset: 1, flex: 'inherit' }),
          )
        ]),
        { optional: true }
      ),
      query(':leave', [
        style({ transform: 'perspective(2000px) rotate3d(0, 1, 0, 0)', opacity: 1}),
          animate('{{leaveT}}s {{leaveD}}s ease-in',
              style({
                transform: 'perspective(2000px) rotate3d(0, 1, 0, 90deg)',  opacity: 0, width: '100%', offset: 1}),
          )
        ], {optional: true} ),
        query(':leave', [
          style({ position: 'fixed'})
        ], {optional: true} ),
        query(':enter', [
          style({ opacity: 0})
        ], {optional: true} ),
        query(':enter' , [
        style({ opacity: 0, transform: 'perspective(2000px) rotate3d(0, 1, 0, -90deg)' }),
          animate(
            '{{enterT}}s {{enterD}}s ease-out',
            // tslint:disable-next-line:max-line-length
            style({transform: 'perspective(2000px) rotate3d(0, 1, 0, 0deg)',  opacity: 1,  offset: 1,  flex: 'inherit', position: 'relative'}),
          )
      ], {optional: true} )
    ,
    query(
      ':enter .' + ROUTING_ELEMENT,
      stagger(200, [
        style({ transform: 'perspective(2000px) rotate3d(0, 1, 0, -90deg)', opacity: 0,   flex: 'inherit'}),
        animate(
          '{{enterTR}}s {{enterDR}}s ease-out',
          style({transform: 'perspective(2000px) rotate3d(0, 1, 0, 0deg)',  opacity: 1,  offset: 1,  flex: 'inherit'}),
        )
      ]),
      { optional: true }
    )])])
;


export function flip_customSpeed(speed: string): AnimationTriggerMetadata {
  switch (speed){
    case ('medium') : {
          return trigger('flip', [
            transition('* <=> *', useAnimation(flipA), {params: {
                enterT: '0.6',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.6',
                leaveTR: '0.6',
                enterDR: '0',
                leaveDR: '0'}})
          ]);
      }
    case ('low') : {
      return trigger('flip', [
        transition('* <=> *', useAnimation(flipA), {params: {
            enterT: '1',
            leaveT: '1',
            enterD: '0',
            leaveD: '0',
            enterTR: '1',
            leaveTR: '1',
            enterDR: '0',
            leaveDR: '0'} })
      ]);
    }
    case ('high') : {
      return trigger('flip', [
        transition('* <=> *', useAnimation(flipA), {params: {
            enterT: '0.3',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0',
            enterTR: '0.3',
            leaveTR: '0.3',
            enterDR: '0',
            leaveDR: '0'} })
      ]);
    }}}

export function flip(): AnimationTriggerMetadata {
    return trigger('flip', [
      transition('* <=> *', useAnimation(flipA), {params: {
          enterT: '0.6',
          leaveT: '0.6',
          enterD: '0',
          leaveD: '0',
          enterTR: '0.6',
          leaveTR: '0.6',
          enterDR: '0',
          leaveDR: '0'} })
    ]); }


