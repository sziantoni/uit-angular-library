const ROUTING_ELEMENT = 'route-animations-elements';

import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, keyframes, animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';

export const surpriseEnterParam = animation([
  query(':enter', [
    style({
      position: 'fixed',
      opacity: 0
    }) ,
  ] , {
    optional: true
  }),
  query(':enter .' + ROUTING_ELEMENT, [
    style({
      opacity: 0
    }) ,
  ] , {
    optional: true
  }),
]);

export const surpriseLeaveParam = animation([
  query(':leave', [
    style({
      position: 'relative'
    }) ,
  ] , {
    optional: true
  })
]);

export const surpriseEnterPart = animation([
  query(':enter',
    animate('{{enterT}}s {{enterD}}s ease-out', keyframes([
      style({ offset: 0, opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom'}),
      style({ offset: 0.2, opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom'}),
      style({ offset: 0.5, opacity: 0.7 , transform: 'rotate(-10deg)'}),
      style({ offset: 0.7, opacity: 0.7, transform: 'rotate(3deg)'}),
      style({ offset: 1, opacity: 1, transform: 'scale(1)', position: 'relative'})
    ])), {optional: true}),
  query(':enter .' + ROUTING_ELEMENT,
    stagger(200, [
      animate('{{enterTR}}s {{enterDR}}s ease-out', keyframes([
        style({ offset: 0, opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom'}),
        style({ offset: 0.5, opacity: 0.7 , transform: 'rotate(-10deg)'}),
        style({ offset: 0.7, opacity: 0.7, transform: 'rotate(3deg)'}),
        style({ offset: 1, opacity: 1, transform: 'scale(1)'})
      ]))]), {optional: true})
]);

export const surpriseLeavePart = animation([
  query(':leave .' + ROUTING_ELEMENT,
    stagger(-100, [
      animate('{{leaveTR}}s {{leaveDR}}s ease-out', keyframes([
        style({ offset: 0, opacity: 1, transform: 'translateY(0%)', transformOrigin: 'center bottom'}),
        style({ offset: 1, opacity: 0, transform: 'translateY(200%) rotate(30deg)'}),
      ]))]), {optional: true}),
  query(':leave',
    animate('{{leaveT}}s {{leaveD}}s ease-out', keyframes([
      style({ offset: 0, opacity: 1, transform: 'translateY(0%)', transformOrigin: 'center bottom', position: 'fixed'}),
      style({ offset: 1, opacity: 0, transform: 'translateY(200%) rotate(30deg)', position: 'fixed'}),
    ])), {optional: true})
]);

export const surpriseA = animation([
      useAnimation(surpriseEnterParam),
      useAnimation(surpriseLeaveParam),
      sequence([
        useAnimation(surpriseLeavePart),
        useAnimation(surpriseEnterPart)
      ])]);




export function surprise_customSpeed(speed: string): AnimationTriggerMetadata {
  if (speed !== 'low' && speed !== 'medium' && speed !== 'high' ){
    throw new Error(
      'invalid direction in  surprise_customSpeed, maybe you wanted to write: { top , bottom }'
    );
  }else {
  switch (speed){
    case ('medium') : {
      return trigger('surprise', [
        transition('* <=> *', useAnimation(surpriseA), {params: {
            enterT: '0.7',
            leaveT: '0.5',
            enterD: '0',
            leaveD: '0',
            enterTR: '0.5',
            leaveTR: '0.5',
            enterDR: '0',
            leaveDR: '0'} })
      ]);
    }
    case ('low') : {
      return trigger('surprise', [
        transition('* <=> *', useAnimation(surpriseA), {params: {
            enterT: '1.4',
            leaveT: '1.2',
            enterD: '0',
            leaveD: '0',
            enterTR: '1.2',
            leaveTR: '1.2',
            enterDR: '0',
            leaveDR: '0'} })
      ]);
    }
    case ('high') : {
      return trigger('surprise', [
        transition('* <=> *', useAnimation(surpriseA), {params: {
            enterT: '0.35',
            leaveT: '0.25',
            enterD: '0',
            leaveD: '0',
            enterTR: '0.25',
            leaveTR: '0.25',
            enterDR: '0',
            leaveDR: '0'} })
      ]);
    }}}}

export function surprise(): AnimationTriggerMetadata {
  return trigger('surprise', [
    transition('* <=> *', useAnimation(surpriseA), {params: {
        enterT: '0.7',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0',
        enterTR: '0.5',
        leaveTR: '0.5',
        enterDR: '0',
        leaveDR: '0'} })
  ]); }


