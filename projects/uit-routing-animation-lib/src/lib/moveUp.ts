const ROUTING_ELEMENT = 'route-animations-elements';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, keyframes, AnimationTriggerMetadata, useAnimation, animation,
} from '@angular/animations';

export const moveUpLeaveParam = animation([
  query(':leave' , style({
  }) , {optional: true})
]);

export const moveUpEnterParam = animation([
  query(':enter .' + ROUTING_ELEMENT , style({
    opacity: 0
  }) , {optional: true}),
  query(':enter' , style({
    opacity: 0,
    position: 'fixed'
  }) , {optional: true})
]);

export const moveUpLeavePart = animation([
  query(':leave', [
    style({ transform: 'translateX(0%) translateY(0)', opacity: 1, flex: 'inherit'}),
    stagger( 300, [
      animate('{{leaveT}}s {{leaveD}}s ease-in', keyframes([
          style({transform: 'translateX(0%) translateY(0%) scaleY(1) scaleX(1)',  opacity: 1,  offset: 0.1}),
          style({ transform: 'translateX({{dirM}}50%) translateY(0%) scaleY(0.6) scaleX(0.6)' ,  opacity: 0.5,  offset: 0.6}),
          style({ transform: 'translateX({{dirM}}50%) translateY(-50%) scaleY(0.5) scaleX(0.5)',   opacity: 0.4,  offset: 0.7 }),
          style({ transform: 'translateX({{dirM}}50%) translateY(-100%) scaleY(0.4) scaleX(0.4)', opacity: 0,  offset: 1,  })
        ])
      ) ,
      style({position: 'fixed'})
    ] )], {optional: true} )
]);

export const moveUpEnterPart = animation([
  query(':enter' , [
    style({ transform: 'translateX({{dirM}}50%) translateY(-100%)',  opacity: 0}),
    stagger(100, [
      animate( '{{enterT}}s {{enterT}}s ease-out' , keyframes([
        style({transform: 'translateX({{dirM}}50%) translateY(-75%) scaleY(0.4) scaleX(0.4)',  opacity: 0.1,  offset: 0.1}),
        style({transform: 'translateX({{dirM}}50%) translateY(-50%) scaleY(0.5) scaleX(0.5)', opacity: 0.2,  offset: 0.2 } ),
        style({ transform: 'translateX({{dirM}}50%) translateY(0%) scaleY(0.6) scaleX(0.6)',   opacity: 0.3,  offset: 0.3 }),
        style({ transform: 'translateX(0%) translateY(0%) scaleY(1) scaleX(1)', opacity: 1, position: 'relative', offset: 1,  })
      ]))])
  ]),
  query(
    '.' + ROUTING_ELEMENT,
    stagger(150, [
      style({ transform: 'translateX(-50%) translateY(-100%)',  opacity: 0, flex: 'inherit'}),
      animate(
        '{{enterTR}}s {{enterDR}}s ease-out', keyframes([
          style({transform: 'translateX({{dirM}}50%) translateY(-50%) scaleY(0.4) scaleX(0.4)',  opacity: 0.1,  offset: 0.1}),
          style({ transform: 'translateX({{dirM}}50%) translateY(0%) scaleY(0.7) scaleX(0.7)', opacity: 0.5,  offset: 0.4}),
          style({ transform: 'translateX(0%) translateY(0%) scaleY(1) scaleX(1)', opacity: 1, offset: 1,  })
        ])

      )
    ]),
    { optional: true }
  )
]);

const moveUpA = animation([
      useAnimation(moveUpLeaveParam),
      useAnimation(moveUpEnterParam),
        sequence([
          useAnimation(moveUpLeavePart),
          useAnimation(moveUpEnterPart)
       ]),
      ]);


export function moveUp_customSpeed(direction: string, speed: string): AnimationTriggerMetadata {
  if (speed !== 'low' && speed !== 'medium' && speed !== 'high') {
    throw new Error(
      'invalid speed in moveUp_customSpeed, maybe you wanted to write: { low , medium, high }'
    );
  }else if (direction !== 'left' && direction !== 'right' ){
    throw new Error(
      'invalid direction in moveUp_customSpeed, maybe you wanted to write: { left , right }'
    );
  }else {
  switch (speed){
    case ('medium') : {
      switch (direction) {
        case('left'): {
          return trigger('moveUp', [
            transition('* <=> *', useAnimation(moveUpA), {params: {
                dirM: '-',
                enterT: '0.7',
                leaveT: '0.7',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.7',
                enterDR: '0'} })
          ]); }
        case('right'): {
          return trigger('moveUp', [
            transition('* <=> *', useAnimation(moveUpA), {params: {
                dirM: '+',
                enterT: '0.7',
                leaveT: '0.7',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.7',
                enterDR: '0'} })
          ]); }
      }}
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('high') : {
      switch (direction) {
        case('left'): {
            return trigger('moveUp', [
              transition('* <=> *', useAnimation(moveUpA), {params: {
                  dirM: '-',
                  enterT: '0.25',
                  leaveT: '0.25',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.25',
                  enterDR: '0'} })
            ]); }
        case('right'): {
            return trigger('moveUp', [
              transition('* <=> *', useAnimation(moveUpA), {params: {
                  dirM: '+',
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
          return trigger('moveUp', [
            transition('* <=> *', useAnimation(moveUpA), {params: {
                dirM: '-',
                enterT: '1.3',
                leaveT: '1.3',
                enterD: '0',
                leaveD: '0',
                enterTR: '1.3',
                enterDR: '0'} })
          ]); }
        case('right'): {
          return trigger('moveUp', [
            transition('* <=> *', useAnimation(moveUpA), {params: {
                dirM: '+',
                enterT: '1.3',
                leaveT: '1.3',
                enterD: '0',
                leaveD: '0',
                enterTR: '1.3',
                enterDR: '0'} })
          ]); }
      }}
  }
}}

export function moveUp(direction: string): AnimationTriggerMetadata {
  if (direction !== 'left' && direction !== 'right' ){
    throw new Error(
      'invalid direction in moveUp, maybe you wanted to write: { left , right }'
    );
  }else {
  if (direction === 'left') {
    return trigger('moveUp', [
      transition('* <=> *', useAnimation(moveUpA), {params: {
          dirM: '-',
          enterT: '0.7',
          leaveT: '0.7',
          enterD: '0',
          leaveD: '0',
          enterTR: '0.7',
          enterDR: '0'} })
    ]); }else {
    return trigger('moveUp', [
      transition('* <=> *', useAnimation(moveUpA), {params: {
          dirM: '+',
          enterT: '0.7',
          leaveT: '0.7',
          enterD: '0',
          leaveD: '0',
          enterTR: '0.7',
          enterDR: '0'} })
    ]); }}}

