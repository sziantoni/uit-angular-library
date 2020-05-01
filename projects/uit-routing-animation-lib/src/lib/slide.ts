const ROUTING_ELEMENT = 'route-animations-elements';

import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';

export const slideLeaveParam = animation([
  query(':leave', style({}), {
    optional: true
  })
]);

export const slideEnterParam = animation([
  query(':enter > *', [
    style({
      position: 'fixed',
      opacity: 0
    }) ,
  ] , {
    optional: true
  }),
  query(':enter .' + ROUTING_ELEMENT, style({ opacity: 0}), {
    optional: true
  })
]);

export const slideLeavePart = animation([
  query(':leave > *', [
    style({ opacity: 1, transform: 'translateY(0%)' }),
    animate('{{leaveT}}s {{leaveD}}s ease-in-out',
      style({ transform: 'translateY({{dirS}}30%)', opacity: 0}) ),
    style({position: 'fixed'})
  ] , {
    optional: true
  })
]);

export const slideEnterPart = animation([
  query(':enter > *', [
    style({transform: 'translateY({{dirS}}30%)', opacity: 0, position: 'static' }),
    animate(
      '{{enterT}}s {{enterD}}s ease-in-out',
      style({ transform: 'translateY(0%)', opacity: 1 })
    )
  ] , {
    optional: true
  }),
  query(
    '.' + ROUTING_ELEMENT,
    stagger(75, [
      style({ transform: 'translateY({{dirS}}30%)', opacity: 0 }),
      animate(
        '{{enterTR}}s {{enterDR}}s ease-in-out',
        style({ transform: 'translateY(0%)', opacity: 1 })
      )
    ]),
    { optional: true }
  )
]);

const slideA = animation([
      useAnimation(slideLeaveParam),
      useAnimation(slideEnterParam),
      sequence([
        useAnimation(slideLeavePart),
        useAnimation(slideEnterPart)
      ]),
      ]);




export function slide_customSpeed(direction: string, speed: string): AnimationTriggerMetadata {
  if (speed !== 'low' && speed !== 'medium' && speed !== 'high') {
    throw new Error(
      'invalid speed in slide_customSpeed, maybe you wanted to write: { low , medium, high }'
    );
  }else if (direction !== 'top' && direction !== 'bottom' ){
    throw new Error(
      'invalid direction in slide_customSpeed, maybe you wanted to write: { top , bottom }'
    );
  }else {
  switch (speed){
    case ('medium') : {
      switch (direction) {
        case('top'): {
          return trigger('slide', [
            transition('* <=> *', useAnimation(slideA), {params: {
                dirS: '+',
                enterT: '0.6',
                leaveT: '0.4',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.55',
                enterDR: '0'} })
          ]); }
        case('bottom'): {
          return trigger('slide', [
            transition('* <=> *', useAnimation(slideA), {params: {
                dirS: '-',
                enterT: '0.6',
                leaveT: '0.4',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.55',
                enterDR: '0'} })
          ]); }
      }}
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('high') : {
      switch (direction) {
        case('top'): {
          return trigger('slide', [
            transition('* <=> *', useAnimation(slideA), {params: {
                dirS: '+',
                enterT: '0.4',
                leaveT: '0.2',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.4',
                enterDR: '0'} })
          ]); }
        case('bottom'): {
          return trigger('slide', [
            transition('* <=> *', useAnimation(slideA), {params: {
                dirS: '-',
                enterT: '0.4',
                leaveT: '0.2',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.4',
                enterDR: '0'} })
          ]); }
      }}
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('low') : {
      switch (direction) {
        case('top'): {
          return trigger('slide', [
            transition('* <=> *', useAnimation(slideA), {params: {
                dirS: '+',
                enterT: '0.9',
                leaveT: '0.7',
                enterD: '0',
                leaveD: '0',
                enterTR: '1.1',
                enterDR: '0'} })
          ]); }
        case('bottom'): {
          return trigger('slide', [
            transition('* <=> *', useAnimation(slideA), {params: {
                dirS: '-',
                enterT: '0.9',
                leaveT: '0.7',
                enterD: '0',
                leaveD: '0',
                enterTR: '1.1',
                enterDR: '0'} })
          ]); }
      }}
       }
}}

export function slide(direction: string): AnimationTriggerMetadata {
  if (direction !== 'top' && direction !== 'bottom' ){
    throw new Error(
      'invalid direction in slide, maybe you wanted to write: { top , bottom }'
    );
  }else {
    if (direction === 'top') {
      return trigger('slide', [
        transition('* <=> *', useAnimation(slideA), {params: {
            dirS: '+',
            enterT: '0.6',
            leaveT: '0.4',
            enterD: '0',
            leaveD: '0',
            enterTR: '0.55',
            enterDR: '0'} })
      ]); }else {
      return trigger('slide', [
        transition('* <=> *', useAnimation(slideA), {params: {
            dirS: '-',
            enterT: '0.6',
            leaveT: '0.4',
            enterD: '0',
            leaveD: '0',
            enterTR: '0.55',
            enterDR: '0'} })
      ]); }}}

