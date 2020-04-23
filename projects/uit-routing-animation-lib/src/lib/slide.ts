const ROUTING_ELEMENT = 'route-animations-elements';

import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';

const slideA = animation([
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
      }),
      sequence([
        query(':leave > *', [
          style({ opacity: 1, transform: 'translateY(0%)' }),
          animate('{{leaveT}}s {{leaveD}}s ease-in-out',
            style({ transform: 'translateY({{dir}}30%)', opacity: 0}) ),
          style({position: 'fixed'})
        ] , {
          optional: true
        }),
        query(':enter > *', [
          style({transform: 'translateY({{dir}}30%)', opacity: 0, position: 'static' }),
          animate(
            '{{enterT}}s {{enterD}}s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1 })
          )
        ] , {
          optional: true
        })]),
      query(
        '.' + ROUTING_ELEMENT,
        stagger(75, [
          style({ transform: 'translateY({{dir}}30%)', opacity: 0 }),
          animate(
            '{{enterTR}}s {{enterDR}}s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1 })
          )
        ]),
        { optional: true }
      )]);




export function slide_customSpeed(direction: string, speed: string): AnimationTriggerMetadata {
  switch (speed){
    case ('medium') : {
      switch (direction) {
        case('top'): {
          return trigger('slide', [
            transition('* <=> *', useAnimation(slideA), {params: {
                dir: '+',
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
                dir: '-',
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
                dir: '+',
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
                dir: '-',
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
                dir: '+',
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
                dir: '-',
                enterT: '0.9',
                leaveT: '0.7',
                enterD: '0',
                leaveD: '0',
                enterTR: '1.1',
                enterDR: '0'} })
          ]); }
      }}
       }
}

export function slide(direction: string): AnimationTriggerMetadata {
    if (direction === 'top') {
      return trigger('slide', [
        transition('* <=> *', useAnimation(slideA), {params: {
            dir: '+',
            enterT: '0.6',
            leaveT: '0.4',
            enterD: '0',
            leaveD: '0',
            enterTR: '0.55',
            enterDR: '0'} })
      ]); }else {
      return trigger('slide', [
        transition('* <=> *', useAnimation(slideA), {params: {
            dir: '-',
            enterT: '0.6',
            leaveT: '0.4',
            enterD: '0',
            leaveD: '0',
            enterTR: '0.55',
            enterDR: '0'} })
      ]); }}

