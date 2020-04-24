import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';

const ROUTING_ELEMENT = 'route-animations-elements';

const rotateA = animation([
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
          style({opacity : 1 , transformOrigin: '{{tr}} bottom', transform: 'translate3d(0,0,0)'}),
          animate( '{{leaveT}}s {{leaveD}}s ease-in' ,
            style({
              opacity: 0.5 , transform: ' rotate3d(0,0,1,{{dir}}90deg) translate3d({{dir}}50%,0,0)' , transformOrigin: '{{tr}} bottom'})
          )
        ], {optional: true }),
        query(':enter ', stagger( 0, [
          style({ opacity: 0, transformOrigin: '{{tr}} bottom', transform: 'rotate3d(0, 0, 1, {{dir}}90deg)'}),
          animate('{{enterT}}s {{enterD}}s  ease-out',
            style({opacity: 1, transformOrigin: '{{tr}} bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
        ]), {optional: true })
      ]),
      query(':enter .' + ROUTING_ELEMENT, stagger( 75, [
        style({ opacity: 0, transformOrigin: '{{tr}} bottom', transform: 'rotate3d(0, 0, 1, {{dir}}90deg)'}),
        animate('{{enterTR}}s {{enterDR}}s ease-out',
          style({opacity: 1, transformOrigin: '{{tr}} bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
      ]), {optional: true })
   ]);


export function rotate_customSpeed(direction: string, speed: string): AnimationTriggerMetadata {
  switch (speed){
    case ('medium') : {
      switch (direction) {
        case('left'): {
          return trigger('rotate', [
            transition('* <=> *', useAnimation(rotateA), {params: {
                tr: 'left',
                dir: '+',
                enterT: '0.5',
                leaveT: '0.5',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.5',
                enterDR: '0'} })
          ]); }
        case('right'): {
          return trigger('rotate', [
            transition('* <=> *', useAnimation(rotateA), {params: {
                tr: 'right',
                dir: '-',
                enterT: '0.5',
                leaveT: '0.5',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.5',
                enterDR: '0'} })
          ]); }
      }}
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('high') : {
      switch (direction) {
        case('left'): {
          return trigger('rotate', [
            transition('* <=> *', useAnimation(rotateA), {params: {
                tr: 'left',
                dir: '+',
                enterT: '0.25',
                leaveT: '0.25',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.25',
                enterDR: '0'} })
          ]); }
        case('right'): {
          return trigger('rotate', [
            transition('* <=> *', useAnimation(rotateA), {params: {
                tr: 'right',
                dir: '-',
                enterT: '0.25',
                leaveT: '0.25',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.25',
                enterDR: '0'} })
          ]); }
      }}
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('low') : {
      switch (direction) {
        case('left'): {
          return trigger('rotate', [
            transition('* <=> *', useAnimation(rotateA), {params: {
                tr: 'left',
                dir: '+',
                enterT: '0.8',
                leaveT: '0.8',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.8',
                enterDR: '0'} })
          ]); }
        case('right'): {
          return trigger('rotate', [
            transition('* <=> *', useAnimation(rotateA), {params: {
                tr: 'right',
                dir: '-',
                enterT: '0.8',
                leaveT: '0.8',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.8',
                enterDR: '0'} })
          ]); }
      }}
  }
}

export function rotate(direction: string): AnimationTriggerMetadata {
  if (direction === 'left') {
    return trigger('rotate', [
      transition('* <=> *', useAnimation(rotateA), {params: {
          dir: '+',
          enterT: '0.5',
          leaveT: '0.5',
          enterD: '0',
          leaveD: '0',
          enterTR: '0.5',
          enterDR: '0'} })
    ]); }else {
    return trigger('rotate', [
      transition('* <=> *', useAnimation(rotateA), {params: {
          tr: 'right',
          dir: '-',
          enterT: '0.5',
          leaveT: '0.5',
          enterD: '0',
          leaveD: '0',
          enterTR: '0.5',
          enterDR: '0'} })
    ]); }}

