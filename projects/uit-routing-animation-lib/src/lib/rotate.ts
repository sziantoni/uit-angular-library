import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';

const ROUTING_ELEMENT = 'route-animations-elements';

export const rotateEnterParam = animation([
  query(':enter', [
    style({
      position: 'fixed',
      width: '100%',
      opacity: 0
    })
  ], { optional: true}),
  query(':enter .' + ROUTING_ELEMENT, style({ opacity: 0}), {
    optional: true
  })
]);

export const rotateLeaveParam = animation([
  query(':leave', [
    style({
      position: 'fixed',
      width: '100%',
      opacity: 0
    })
  ], { optional: true})]);


export const rotateLeavePart = animation([
  query(':leave', [
  style({opacity : 1 , transformOrigin: '{{tr}} bottom', transform: 'translate3d(0,0,0)'}),
  animate( '{{leaveT}}s {{leaveD}}s ease-in' ,
    style({
      opacity: 0.5 , transform: ' rotate3d(0,0,1,{{dirR}}90deg) translate3d({{dirR}}50%,0,0)' , transformOrigin: '{{tr}} bottom'})
  )
], {optional: true })
]);

export const rotateEnterPart = animation([
  query(':enter ', stagger( 0, [
    style({ opacity: 0, transformOrigin: '{{tr}} bottom', transform: 'rotate3d(0, 0, 1, {{dirR}}90deg)'}),
    animate('{{enterT}}s {{enterD}}s  ease-out',
      style({opacity: 1, transformOrigin: '{{tr}} bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
  ]), {optional: true }),
  query(':enter .' + ROUTING_ELEMENT, stagger( 75, [
    style({ opacity: 0, transformOrigin: '{{tr}} bottom', transform: 'rotate3d(0, 0, 1, {{dirR}}90deg)'}),
    animate('{{enterTR}}s {{enterDR}}s ease-out',
      style({opacity: 1, transformOrigin: '{{tr}} bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
  ]), {optional: true })
]);

const rotateA = animation([
      useAnimation(rotateLeaveParam),
      useAnimation(rotateEnterParam),
      sequence([
        useAnimation(rotateLeavePart),
        useAnimation(rotateEnterPart)
      ])
   ]);


export function rotate_customSpeed(direction: string, speed: string): AnimationTriggerMetadata {
  if (speed !== 'low' && speed !== 'medium' && speed !== 'high') {
    throw new Error(
      'invalid speed in rotate_customSpeed, maybe you wanted to write: { low , medium, high }'
    );
  }else if (direction !== 'left' && direction !== 'right' ){
    throw new Error(
      'invalid direction in rotate_customSpeed, maybe you wanted to write: { left , right }'
    );
  }else {
  switch (speed){
    case ('medium') : {
      switch (direction) {
        case('left'): {
          return trigger('rotate', [
            transition('* <=> *', useAnimation(rotateA), {params: {
                tr: 'left',
                dirR: '+',
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
                dirR: '-',
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
                dirR: '+',
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
                dirR: '-',
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
                dirR: '+',
                enterT: '1',
                leaveT: '1',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.8',
                enterDR: '0'} })
          ]); }
        case('right'): {
          return trigger('rotate', [
            transition('* <=> *', useAnimation(rotateA), {params: {
                tr: 'right',
                dirR: '-',
                enterT: '1',
                leaveT: '1',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.8',
                enterDR: '0'} })
          ]); }
      }}
  }
}}

export function rotate(direction: string): AnimationTriggerMetadata {
  if (direction !== 'left' && direction !== 'right' ){
    throw new Error(
      'invalid direction in rotate, maybe you wanted to write: { left , right }'
    );
  }else {
  if (direction === 'left') {
    return trigger('rotate', [
      transition('* <=> *', useAnimation(rotateA), {params: {
          dirR: '+',
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
          dirR: '-',
          enterT: '0.5',
          leaveT: '0.5',
          enterD: '0',
          leaveD: '0',
          enterTR: '0.5',
          enterDR: '0'} })
    ]); }}}

