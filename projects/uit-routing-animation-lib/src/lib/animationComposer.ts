import {stdbLeavePart, stdbLeaveParams, stdbEnterPart, stdbEnterParams} from './slideTitleDownBlocks';
import {flipLeavePart, flipEnterPart, flipEnterParams, flipLeaveParams} from './flip';
import {fadeBackEnterPart, fadeBackLeavePart, fadeBackEnterParams, fadeBackLeaveParam} from './fadeBack';
import {surpriseEnterPart, surpriseLeaveParam, surpriseLeavePart, surpriseEnterParam} from './surprise';
import {rotateLeavePart, rotateLeaveParam, rotateEnterParam, rotateEnterPart} from './rotate';
import {slideEnterPart, slideLeavePart, slideEnterParam, slideLeaveParam} from './slide';
import {moveUpLeavePart, moveUpEnterParam, moveUpLeaveParam, moveUpEnterPart} from './moveUp';
import {AnimationTriggerMetadata, sequence, transition, trigger, useAnimation} from '@angular/animations';
import {scrollSideEnterParam, scrollSideLeaveParam, scrollSideEnterPart, scrollSideLeavePart} from './scrollSide';
import {scaleAndSlideEnterParam, scaleAndSlideLeaveParam, scaleAndSlideEnterPart, scaleAndSlideLeavePart} from './scaleAndSlide';

let leaveP;
let leaveA;
let enterP;
let enterA;

// flip, fadeback, stdb, surprise
export function animationComposerSimple(
  leaveAnimation: string,
  leaveSpeed: string,
  enterAnimation: string,
  enterSpeed: string):
  AnimationTriggerMetadata {
    switch (leaveAnimation) {
    case('flip'): {
      leaveP = flipLeaveParams;
      leaveA = flipLeavePart;
      break;
    }
    case('fadeBack'): {
      leaveP = fadeBackLeaveParam;
      leaveA = fadeBackLeavePart;
      break;
    }
    case('surprise'): {
      leaveP = surpriseLeaveParam;
      leaveA = surpriseLeavePart;
      break;
    }
    case('slideTitleDownBlocks'): {
      leaveP = stdbLeaveParams;
      leaveA = stdbLeavePart;
      break;
    }
    default: {
      throw new Error(
        'invalid enter animation in animationComposerSimple, maybe you wanted to write: { fadeBack, slideTitleDownBlocks, surprise or flip }'
      );
    }
  }
    switch (enterAnimation) {
      case('flip'): {
        enterP = flipEnterParams;
        enterA = flipEnterPart;
        break;
      }
      case('fadeBack'): {
        enterP = fadeBackEnterParams;
        enterA = fadeBackEnterPart;
        break;
      }
      case('surprise'): {
        enterP = surpriseEnterParam;
        enterA = surpriseEnterPart;
        break;
      }
      case('slideTitleDownBlocks'): {
        enterP = stdbEnterParams;
        enterA = stdbEnterPart;
        break;
      }
      default: {
        throw new Error(
          'invalid leave animation in animationComposerSimple, maybe you wanted to write: { fadeBack, slideTitleDownBlocks, surprise or flip }'
        );
      }
    }
    switch (leaveSpeed) {
      case('low'): {
        switch (enterSpeed) {
          case('low'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                  useAnimation(leaveP),
                  useAnimation(enterP),
                  sequence([
                    useAnimation(leaveA),
                    useAnimation(enterA)
              ])
              ], {params: {
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
          case('medium'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.6',
                  leaveT: '1',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.6',
                  leaveTR: '1',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('high'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.4',
                  leaveT: '1',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.4',
                  leaveTR: '1',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
        }
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case('medium'): {
        switch (enterSpeed) {
          case('low'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '1',
                  leaveT: '0.6',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '1',
                  leaveTR: '0.6',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('medium'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.6',
                  leaveT: '0.6',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.6',
                  leaveTR: '0.6',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('high'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.4',
                  leaveT: '0.6',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.4',
                  leaveTR: '0.6',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
        }
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case('high'): {
        switch (enterSpeed) {
          case('low'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '1',
                  leaveT: '0.4',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '1',
                  leaveTR: '0.4',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('medium'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.6',
                  leaveT: '0.4',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.6',
                  leaveTR: '0.4',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('high'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.4',
                  leaveT: '0.4',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.4',
                  leaveTR: '0.4',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
        }
      }

    }
}

let dirRc = '';
let tRc = '';
let dirMc = '';
let dirSc = '';
let dirss = '';
let oppss = '';
let dirsas = '';
let oppsas = '';

// flip, fadeback, stdb, surprise, rotate, moveUp, slide
export function animationComposerComplex(
  leaveAnimation: string,
  leaveSpeed: string,
  directionLeave: string,
  enterAnimation: string,
  enterSpeed: string,
  directionEnter: string,
  ):
  AnimationTriggerMetadata {
  switch (leaveAnimation) {
    case('flip'): {
      leaveP = flipLeaveParams;
      leaveA = flipLeavePart;
      break;
    }
    case('fadeBack'): {
      leaveP = fadeBackLeaveParam;
      leaveA = fadeBackLeavePart;
      break;
    }
    case('surprise'): {
      leaveP = surpriseLeaveParam;
      leaveA = surpriseLeavePart;
      break;
    }
    case('slideTitleDownBlocks'): {
      leaveP = stdbLeaveParams;
      leaveA = stdbLeavePart;
      break;
    }
    case('rotate'): {
      leaveP = rotateLeaveParam;
      leaveA = rotateLeavePart;
      break;
    }
    case('moveUp'): {
      leaveP = moveUpLeaveParam;
      leaveA = moveUpLeavePart;
      break;
    }
    case('slide'): {
      leaveP = slideLeaveParam;
      leaveA = slideLeavePart;
      break;
    }
    case('scrollSide'): {
      if (directionLeave === 'left'){
        leaveP = scrollSideLeaveParam;
        leaveA = scrollSideLeavePart;
        dirss = '-';
        oppss = '+';
      }else if (directionLeave === 'right'){
        leaveP = scrollSideLeaveParam;
        leaveA = scrollSideLeavePart;
        dirss = '+';
        oppss = '-';
      }
      break;
    }
    case('scaleAndSlide'): {
      if (directionLeave === 'left'){
        leaveP = scaleAndSlideLeaveParam;
        leaveA = scaleAndSlideLeavePart;
        dirsas = '-';
        oppsas = '+';
      }else if (directionLeave === 'right'){
        leaveP = scaleAndSlideLeaveParam;
        leaveA = scaleAndSlideLeavePart;
        dirsas = '+';
        oppsas = '-';
      }
      break;
    }
    default: {
      throw new Error(
        'invalid leave animation in animationComposerSimple, maybe you wanted to write: { fadeBack, slideTitleDownBlocks, surprise, flip, moveUp, slide, rotate }'
      );
    }
  }
  switch (enterAnimation) {
    case('flip'): {
      enterP = flipEnterParams;
      enterA = flipEnterPart;
      break;
    }
    case('fadeBack'): {
      enterP = fadeBackEnterParams;
      enterA = fadeBackEnterPart;
      break;
    }
    case('surprise'): {
      enterP = surpriseEnterParam;
      enterA = surpriseEnterPart;
      break;
    }
    case('slideTitleDownBlocks'): {
      enterP = stdbEnterParams;
      enterA = stdbEnterPart;
      break;
    }
    case('rotate'): {
      enterP = rotateEnterParam;
      enterA = rotateEnterPart;
      break;
    }
    case('moveUp'): {
      enterP = moveUpEnterParam;
      enterA = moveUpEnterPart;
      break;
    }
    case('slide'): {
      enterP = slideEnterParam;
      enterA = slideEnterPart;
      break;
    }
    case('scrollSide'): {
      if (directionEnter === 'left'){
        enterP = scrollSideEnterParam;
        enterA = scrollSideEnterPart;
        dirss = '-';
        oppss = '+';
      }else if (directionEnter === 'right'){
        enterP = scrollSideEnterParam;
        enterA = scrollSideEnterPart;
        dirss = '+';
        oppss = '-';
      }
      break;
    }
    case('scaleAndSlide'): {
      if (directionEnter === 'left'){
        enterP = scaleAndSlideEnterParam;
        enterA = scaleAndSlideEnterPart;
        dirsas = '-';
        oppsas = '+';
      }else if (directionEnter === 'right'){
        enterP = scaleAndSlideEnterParam;
        enterA = scaleAndSlideEnterPart;
        dirsas = '+';
        oppsas = '-';
      }
      break;
    }
    default: {
      throw new Error(
        'invalid leave animation in animationComposerSimple, maybe you wanted to write: { fadeBack, slideTitleDownBlocks, surprise, flip, moveUp, slide, rotate }'
      );
    }
  }
  if ((enterA === rotateEnterPart) && (directionEnter === 'right')){
    dirRc = '-';
    tRc = 'right';
  }else if ((enterA === rotateEnterPart) && directionEnter === 'left') {
    dirRc = '+';
    tRc = 'left';
    }else if ((leaveA === rotateLeavePart) && (directionLeave === 'right')){
    dirRc = '-';
    tRc = 'right';
  }else if ((leaveA === rotateLeavePart) && directionLeave === 'left') {
    dirRc = '+';
    tRc = 'left';
  }

  if ((enterA === moveUpEnterPart) && directionEnter === 'right'){
    dirMc = '+';
  }else if ((enterA === moveUpEnterPart) && directionEnter === 'left') {
    dirMc = '-';
  }else if ((leaveA === moveUpLeavePart) && directionLeave === 'right'){
    dirMc = '+';
  }else if ((leaveA === moveUpLeavePart) && directionLeave === 'left') {
    dirMc = '-';
  }

  if ((enterA === slideEnterPart) && directionEnter === 'bottom'){
    dirSc = '-';
  }else if ((enterA === slideEnterPart) && directionEnter === 'top') {
    dirSc = '+';
  }else if ((leaveA === slideLeavePart) && directionLeave === 'bottom'){
    dirSc = '-';
  }else if ((leaveA === slideLeavePart) && directionLeave === 'top') {
    dirSc = '+';
  }
  // tslint:disable-next-line:max-line-length
  if (directionEnter !== 'bottom' && directionEnter !== 'top' && directionEnter !== 'right' && directionEnter !== 'left' && directionEnter !== ''){
    throw new Error(
      'invalid directionEnter in animationComposerComplex, maybe you wanted to write: { top, bottom, left, right, void }'
    );
    // tslint:disable-next-line:max-line-length
  }else if (directionLeave !== 'bottom' && directionLeave !== 'top' && directionLeave !== 'right' && directionLeave !== 'left' && directionLeave !== ''){
    throw new Error(
      'invalid directionLeave in animationComposerComplex, maybe you wanted to write: { top, bottom, left, right, void }'
    );
  }else{
  switch (leaveSpeed) {
    case('low'): {
      switch (enterSpeed) {
        case('low'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                dirSS: dirss,
                oppSS: oppss,
                dirSAS: dirsas,
                oppSAS: oppsas,
                enterTS: '1',
                leaveTS: '1',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1',
                leaveTSL: '1',
                enterDSL: '0',
                leaveDSL: '0',
                tr: tRc,
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
        case('medium'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                dirSS: dirss,
                oppSS: oppss,
                tr: tRc,
                dirSAS: dirsas,
                oppSAS: oppsas,
                enterTS: '0.6',
                leaveTS: '1',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.6',
                leaveTSL: '1',
                enterDSL: '0',
                leaveDSL: '0',
                enterT: '0.6',
                leaveT: '1',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.6',
                leaveTR: '1',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('high'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                dirSS: dirss,
                oppSS: oppss,
                tr: tRc,
                dirSAS: dirsas,
                oppSAS: oppsas,
                enterTS: '0.4',
                leaveTS: '1',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '1',
                enterDSL: '0',
                leaveDSL: '0',
                enterT: '0.4',
                leaveT: '1',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.4',
                leaveTR: '1',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
      }
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case('medium'): {
      switch (enterSpeed) {
        case('low'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                dirSS: dirss,
                oppSS: oppss,
                tr: tRc,
                dirSAS: dirsas,
                oppSAS: oppsas,
                enterTS: '1',
                leaveTS: '0.6',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1',
                leaveTSL: '0.6',
                enterDSL: '0',
                leaveDSL: '0',
                enterT: '1',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0',
                enterTR: '1',
                leaveTR: '0.6',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('medium'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                dirSS: dirss,
                oppSS: oppss,
                tr: tRc,
                dirSAS: dirsas,
                oppSAS: oppsas,
                enterTS: '0.6',
                leaveTS: '0.6',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.6',
                leaveTSL: '0.6',
                enterDSL: '0',
                leaveDSL: '0',
                enterT: '0.6',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.6',
                leaveTR: '0.6',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('high'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                dirSS: dirss,
                oppSS: oppss,
                tr: tRc,
                dirSAS: dirsas,
                oppSAS: oppsas,
                enterTS: '0.4',
                leaveTS: '0.6',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.6',
                enterDSL: '0',
                leaveDSL: '0',
                enterT: '0.4',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.4',
                leaveTR: '0.6',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
      }
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case('high'): {
      switch (enterSpeed) {
        case('low'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                dirSS: dirss,
                oppSS: oppss,
                tr: tRc,
                dirSAS: dirsas,
                oppSAS: oppsas,
                enterTS: '1',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1',
                leaveTSL: '0.4',
                enterDSL: '0',
                leaveDSL: '0',
                enterT: '1',
                leaveT: '0.4',
                enterD: '0',
                leaveD: '0',
                enterTR: '1',
                leaveTR: '0.4',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('medium'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                dirSS: dirss,
                oppSS: oppss,
                tr: tRc,
                dirSAS: dirsas,
                oppSAS: oppsas,
                enterTS: '0.6',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.6',
                leaveTSL: '0.4',
                enterDSL: '0',
                leaveDSL: '0',
                enterT: '0.6',
                leaveT: '0.4',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.6',
                leaveTR: '0.4',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('high'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                dirSS: dirss,
                oppSS: oppss,
                tr: tRc,
                dirSAS: dirsas,
                oppSAS: oppsas,
                enterTS: '0.4',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.4',
                enterDSL: '0',
                leaveDSL: '0',
                enterT: '0.4',
                leaveT: '0.4',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.4',
                leaveTR: '0.4',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
      }
    }

  }
  }
 }

