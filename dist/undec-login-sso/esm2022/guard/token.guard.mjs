import * as jwt_decode from 'jwt-decode';
let redirectCount = 0;
export const tokenGuard = (route) => {
    const localStorageToken = localStorage.getItem('undec-token');
    if (localStorageToken) {
        return true;
    }
    const tokenQueryParams = route.queryParamMap.get('idToken');
    if (tokenQueryParams) {
        const decodedToken = jwt_decode.jwtDecode(tokenQueryParams);
        localStorage.setItem('user', decodedToken['email']);
        localStorage.setItem('undec-token', tokenQueryParams);
        return true;
    }
    if (redirectCount === 0) {
        const locationBase64 = window.btoa(unescape(encodeURIComponent(window.location.origin + "#/home")));
        const authUrl = "https://vm01undec.riu.edu.ar:8443/cancerbero/auth/login?state=" + locationBase64;
        redirectCount = 1;
        window.location.assign(authUrl);
    }
    return false;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy91bmRlYy1sb2dpbi1zc28vc3JjL2d1YXJkL3Rva2VuLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxDQUFDO0FBRXpDLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUV0QixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQWtCLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDakQsTUFBTSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlELElBQUksaUJBQWlCLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUQsSUFBSSxnQkFBZ0IsRUFBRTtRQUNwQixNQUFNLFlBQVksR0FBOEIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZGLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BELFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksYUFBYSxLQUFLLENBQUMsRUFBRTtRQUN2QixNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkcsTUFBTSxPQUFPLEdBQUcsZ0VBQWdFLEdBQUcsY0FBYyxDQUFBO1FBQ2pHLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakM7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlRm4gfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBqd3RfZGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5cclxubGV0IHJlZGlyZWN0Q291bnQgPSAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRva2VuR3VhcmQ6IENhbkFjdGl2YXRlRm4gPSAocm91dGUpID0+IHtcclxuICBjb25zdCBsb2NhbFN0b3JhZ2VUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bmRlYy10b2tlbicpO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2VUb2tlbikge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2tlblF1ZXJ5UGFyYW1zID0gcm91dGUucXVlcnlQYXJhbU1hcC5nZXQoJ2lkVG9rZW4nKTtcclxuICBpZiAodG9rZW5RdWVyeVBhcmFtcykge1xyXG4gICAgY29uc3QgZGVjb2RlZFRva2VuOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gand0X2RlY29kZS5qd3REZWNvZGUodG9rZW5RdWVyeVBhcmFtcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIGRlY29kZWRUb2tlblsnZW1haWwnXSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5kZWMtdG9rZW4nLCB0b2tlblF1ZXJ5UGFyYW1zKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHJlZGlyZWN0Q291bnQgPT09IDApIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uQmFzZTY0ID0gd2luZG93LmJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIiMvaG9tZVwiKSkpXHJcbiAgICBjb25zdCBhdXRoVXJsID0gXCJodHRwczovL3ZtMDF1bmRlYy5yaXUuZWR1LmFyOjg0NDMvY2FuY2VyYmVyby9hdXRoL2xvZ2luP3N0YXRlPVwiICsgbG9jYXRpb25CYXNlNjRcclxuICAgIHJlZGlyZWN0Q291bnQgPSAxO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihhdXRoVXJsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuIl19