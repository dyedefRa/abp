/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/fade.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, style } from '@angular/animations';
/** @type {?} */
export var fadeIn = animation([style({ opacity: '0' }), animate('{{ time}} {{ easing }}', style({ opacity: '1' }))], {
    params: { time: '350ms', easing: 'ease' },
});
/** @type {?} */
export var fadeOut = animation([style({ opacity: '1' }), animate('{{ time}} {{ easing }}', style({ opacity: '0' }))], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
export var fadeInDown = animation([
    style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
export var fadeInUp = animation([
    style({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
export var fadeInLeft = animation([
    style({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
export var fadeInRight = animation([
    style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
export var fadeOutDown = animation([
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
export var fadeOutUp = animation([
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
export var fadeOutLeft = animation([
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
export var fadeOutRight = animation([
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS5hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvYW5pbWF0aW9ucy9mYWRlLmFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFaEUsTUFBTSxLQUFPLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ3JILE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtDQUMxQyxDQUFDOztBQUVGLE1BQU0sS0FBTyxPQUFPLEdBQUcsU0FBUyxDQUM5QixDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3JGLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FDOUM7O0FBRUQsTUFBTSxLQUFPLFVBQVUsR0FBRyxTQUFTLENBQ2pDO0lBQ0UsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQztJQUN2RSxPQUFPLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsK0JBQStCLEVBQUUsQ0FBQyxDQUFDO0NBQ3hHLEVB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QzNHLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQzdEOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQUcsU0FBUyxDQUNuQztJQUNFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLCtCQUErQixFQUFFLENBQUM7SUFDbkUsT0FBTyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLG1DQUFtQyxFQUFFLENBQUMsQ0FBQztDQUM1RyxFQUNELEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUM3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIGFuaW1hdGlvbiwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IGFuaW1hdGlvbihbc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksIGFuaW1hdGUoJ3t7IHRpbWV9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KSldLCB7XG4gIHBhcmFtczogeyB0aW1lOiAnMzUwbXMnLCBlYXNpbmc6ICdlYXNlJyB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmYWRlT3V0ID0gYW5pbWF0aW9uKFxuICBbc3R5bGUoeyBvcGFjaXR5OiAnMScgfSksIGFuaW1hdGUoJ3t7IHRpbWV9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSldLFxuICB7IHBhcmFtczogeyB0aW1lOiAnMzUwbXMnLCBlYXNpbmc6ICdlYXNlJyB9IH0sXG4pO1xuXG5leHBvcnQgY29uc3QgZmFkZUluRG93biA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWSgtMjBweCknIH0pLFxuICAgIGFuaW1hdGUoJ3t7IHRpbWUgfX0ge3sgZWFzaW5nIH19Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVZKDApJyB9KSksXG4gIF0sXG4gIHsgcGFyYW1zOiB7IHRpbWU6ICczNTBtcycsIGVhc2luZzogJ2Vhc2UnLCB0cmFuc2Zvcm06ICcnIH0gfSxcbik7XG5cbmV4cG9ydCBjb25zdCBmYWRlSW5VcCA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWSgyMHB4KScgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHRyYW5zbGF0ZVkoMCknIH0pKSxcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScsIHRyYW5zZm9ybTogJycgfSB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGZhZGVJbkxlZnQgPSBhbmltYXRpb24oXG4gIFtcbiAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHRyYW5zbGF0ZVgoMjBweCknIH0pLFxuICAgIGFuaW1hdGUoJ3t7IHRpbWUgfX0ge3sgZWFzaW5nIH19Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVYKDApJyB9KSksXG4gIF0sXG4gIHsgcGFyYW1zOiB7IHRpbWU6ICczNTBtcycsIGVhc2luZzogJ2Vhc2UnLCB0cmFuc2Zvcm06ICcnIH0gfSxcbik7XG5cbmV4cG9ydCBjb25zdCBmYWRlSW5SaWdodCA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWCgtMjBweCknIH0pLFxuICAgIGFuaW1hdGUoJ3t7IHRpbWUgfX0ge3sgZWFzaW5nIH19Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVYKDApJyB9KSksXG4gIF0sXG4gIHsgcGFyYW1zOiB7IHRpbWU6ICczNTBtcycsIGVhc2luZzogJ2Vhc2UnLCB0cmFuc2Zvcm06ICcnIH0gfSxcbik7XG5cbmV4cG9ydCBjb25zdCBmYWRlT3V0RG93biA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWSgwKScgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHRyYW5zbGF0ZVkoMjBweCknIH0pKSxcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScsIHRyYW5zZm9ybTogJycgfSB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGZhZGVPdXRVcCA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWSgwKScgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHRyYW5zbGF0ZVkoLTIwcHgpJyB9KSksXG4gIF0sXG4gIHsgcGFyYW1zOiB7IHRpbWU6ICczNTBtcycsIGVhc2luZzogJ2Vhc2UnLCB0cmFuc2Zvcm06ICcnIH0gfSxcbik7XG5cbmV4cG9ydCBjb25zdCBmYWRlT3V0TGVmdCA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWCgwKScgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHRyYW5zbGF0ZVgoMjBweCknIH0pKSxcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScsIHRyYW5zZm9ybTogJycgfSB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGZhZGVPdXRSaWdodCA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWCgwKScgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHRyYW5zbGF0ZVgoLTIwcHgpJyB9KSksXG4gIF0sXG4gIHsgcGFyYW1zOiB7IHRpbWU6ICczNTBtcycsIGVhc2luZzogJ2Vhc2UnLCB0cmFuc2Zvcm06ICcnIH0gfSxcbik7XG4iXX0=