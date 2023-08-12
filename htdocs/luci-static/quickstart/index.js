var ha = Object.defineProperty,
    xa = Object.defineProperties;
var ka = Object.getOwnPropertyDescriptors;
var Ge = Object.getOwnPropertySymbols;
var wa = Object.prototype.hasOwnProperty,
    ya = Object.prototype.propertyIsEnumerable;
var ke = (e, a, o) => a in e ? ha(e, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[a] = o,
    J = (e, a) => {
        for (var o in a || (a = {})) wa.call(a, o) && ke(e, o, a[o]);
        if (Ge)
            for (var o of Ge(a)) ya.call(a, o) && ke(e, o, a[o]);
        return e
    },
    at = (e, a) => xa(e, ka(a));
var Fa = (e, a) => () => (a || e((a = {
    exports: {}
}).exports, a), a.exports);
var Zt = (e, a, o) => (ke(e, typeof a != "symbol" ? a + "" : a, o), o);
var T = (e, a, o) => new Promise((n, s) => {
    var c = d => {
            try {
                f(o.next(d))
            } catch (l) {
                s(l)
            }
        },
        p = d => {
            try {
                f(o.throw(d))
            } catch (l) {
                s(l)
            }
        },
        f = d => d.done ? n(d.value) : Promise.resolve(d.value).then(c, p);
    f((o = o.apply(e, a)).next())
});
import {
    d as Qt,
    a as P,
    c as R,
    u as w,
    o as i,
    b as r,
    e as t,
    t as h,
    n as It,
    f as C,
    r as X,
    g as D,
    h as ot,
    i as Dt,
    w as z,
    v as Lt,
    j as Ea,
    k as M,
    l as V,
    m as y,
    p as Ca,
    q as Ft,
    s as Q,
    F as L,
    x as j,
    y as W,
    z as O,
    A as N,
    B as Mt,
    C as $a,
    D as Gt,
    E as Da,
    G as Ba,
    H as Ya,
    I as Aa,
    J as Sa,
    K as za,
    L as Pa,
    M as nt,
    T as kt,
    N as tt,
    O as Ta,
    P as it,
    Q as wt,
    R as U,
    S as ft,
    U as te,
    V as Fe,
    W as Ia,
    X as La,
    Y as ue,
    Z as Ma,
    _ as Oa,
    $ as Na,
    a0 as qa
} from "./vendor.js?v=c0f4c287";
var eF = Fa(Kt => {
    const Va = function () {
        const a = document.createElement("link").relList;
        if (a && a.supports && a.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
        new MutationObserver(s => {
            for (const c of s)
                if (c.type === "childList")
                    for (const p of c.addedNodes) p.tagName === "LINK" && p.rel === "modulepreload" && n(p)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function o(s) {
            const c = {};
            return s.integrity && (c.integrity = s.integrity), s.referrerpolicy && (c.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? c.credentials = "include" : s.crossorigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
        }

        function n(s) {
            if (s.ep) return;
            s.ep = !0;
            const c = o(s);
            fetch(s.href, c)
        }
    };
    Va();
    const Ga = (e, a) => T(Kt, null, function* () {
        return new Promise((o, n) => T(Kt, null, function* () {
            try {
                const s = yield fetch(e, a);
                if (Math.floor(s.status / 100) != 2) throw s.status + " " + s.statusText;
                const c = J({}, s);
                c.data = yield s.json(), o(c)
            } catch (s) {
                const c = s;
                n("\u7F51\u7EDC\u5F02\u5E38\uFF1A" + ((c == null ? void 0 : c.message) || s))
            }
        }))
    });
    class Ee {
        constructor(a) {
            Zt(this, "config", {
                baseURL: "",
                headers: {}
            });
            Zt(this, "useRequest", a => a);
            Zt(this, "useResponse", a => a);
            Zt(this, "useError", a => a);
            a.baseURL && (this.config.baseURL = a.baseURL), a.headers && (this.config.headers = a.headers)
        }
        static create(a) {
            return new Ee(a)
        }
        Do(a, o) {
            return T(this, null, function* () {
                return new Promise((n, s) => T(this, null, function* () {
                    try {
                        const c = this.useRequest({
                            baseURL: this.config.baseURL,
                            headers: this.config.headers
                        });
                        a = `${c.baseURL||""}${a}`, o.headers == null && (o.headers = {}), c.headers && (o.headers = J({}, c.headers));
                        const f = yield fetch(a, o), d = J({}, f);
                        d.data = yield f.json(), n(this.useResponse(d))
                    } catch (c) {
                        this.useError(c), s(c)
                    }
                }))
            })
        }
        TEXT(a, o) {
            return T(this, null, function* () {
                return new Promise((n, s) => T(this, null, function* () {
                    try {
                        const c = this.useRequest({
                            baseURL: this.config.baseURL,
                            headers: this.config.headers
                        });
                        a = `${c.baseURL||""}${a}`, o.headers == null && (o.headers = {}), c.headers && (o.headers = J({}, c.headers));
                        const f = yield fetch(a, o), d = J({}, f);
                        d.data = yield f.text(), n(d)
                    } catch (c) {
                        this.useError(c), s(c)
                    }
                }))
            })
        }
        interceptors() {
            const a = this;
            return {
                requset: {
                    use(o) {
                        a.useRequest = o
                    }
                },
                response: {
                    use(o, n) {
                        a.useResponse = o, n && (a.useError = n)
                    }
                }
            }
        }
    }
    const Xe = Ee.create({});
    Xe.interceptors().requset.use(e => e);
    Xe.interceptors().response.use(e => (e.data && e.data.success == null && e.data.success == 0, e));
    const ja = "/cgi-bin/luci/istore";
    let je = !1;
    const I = (e, a) => (e.indexOf("//") == -1 && (e = `${ja}${e}`), Ga(e, a).then(o => (o != null && o.data && o.data.success == -1001 && o.data.error == "Forbidden" && (je || (je = !0, alert("\u767B\u5F55\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"), location.reload())), o))),
        Ra = {
            Statistics: {
                GET() {
                    return I("/u/network/statistics/", {
                        method: "GET"
                    })
                }
            },
            Status: {
                GET() {
                    return I("/u/network/status/", {
                        method: "GET"
                    })
                }
            },
            Device: {
                List: {
                    GET() {
                        return I("/network/device/list/", {
                            method: "GET"
                        })
                    }
                }
            },
            Homebox: {
                Enable: {
                    POST() {
                        return I("/network/homebox/enable/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            }
                        })
                    }
                }
            },
            CheckPublickNet: {
                POST(e) {
                    return I("/network/checkPublicNet/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            GetInterfaceConfig: {
                GET() {
                    return I("/network/interface/config/", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        }
                    })
                }
            },
            POSTInterfaceConfig: {
                POST(e) {
                    return I("/network/interface/config/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            PortList: {
                GET() {
                    return I("/network/port/list/", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        }
                    })
                }
            }
        },
        Ua = {
            Version: {
                GET() {
                    return I("/u/system/version/", {
                        method: "GET"
                    })
                }
            },
            CheckUpdate: {
                GET() {
                    return I("/system/check-update/", {
                        method: "GET"
                    })
                }
            },
            Reboot: {
                POST(e) {
                    return I("/system/reboot/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            Status: {
                GET() {
                    return I("/system/status/", {
                        method: "GET"
                    })
                }
            }
        },
        Wa = {
            Disk: {
                Status: {
                    GET() {
                        return I("/nas/disk/status/", {
                            method: "GET"
                        })
                    }
                },
                Erase: {
                    POST(e) {
                        return I("/nas/disk/erase", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                            body: JSON.stringify(e)
                        })
                    }
                },
                Init: {
                    POST: e => I("/nas/disk/init/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                },
                InitRest: {
                    POST: e => I("/nas/disk/initrest/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                },
                Partition: {
                    Format: {
                        POST: e => I("/nas/disk/partition/format", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                            body: JSON.stringify(e)
                        })
                    },
                    Mount: {
                        POST: e => I("/nas/disk/partition/mount", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                            body: JSON.stringify(e)
                        })
                    }
                }
            },
            Service: {
                Status: {
                    GET() {
                        return I("/u/nas/service/status/", {
                            method: "GET"
                        })
                    }
                }
            },
            Samba: {
                Create: {
                    POST(e) {
                        return I("/nas/samba/create", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                            body: JSON.stringify(e)
                        })
                    }
                }
            },
            Webdav: {
                Create: {
                    POST(e) {
                        return I("/nas/webdav/create", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                            body: JSON.stringify(e)
                        })
                    }
                },
                Status: {
                    GET() {
                        return I("/nas/webdav/status/", {
                            method: "GET"
                        })
                    }
                }
            },
            Linkease: {
                Enable: {
                    POST() {
                        return I("/u/nas/linkease/enable", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            }
                        })
                    }
                }
            },
            Sandbox: {
                POST(e) {
                    return I("/nas/sandbox/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            GetSandbox: {
                GET() {
                    return I("/nas/sandbox/", {
                        method: "GET"
                    })
                }
            },
            SandboxDisks: {
                GET() {
                    return I("/nas/sandbox/disks/", {
                        method: "GET"
                    })
                }
            },
            SandboxCommit: {
                POST() {
                    return I("/u/nas/sandbox/commit/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify({})
                    })
                }
            },
            SandboxReset: {
                POST() {
                    return I("/nas/sandbox/reset/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        }
                    })
                }
            },
            SandboxExit: {
                POST() {
                    return I("/nas/sandbox/exit/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        }
                    })
                }
            }
        },
        Ha = {
            Check: {
                POST(e) {
                    return I("/app/check/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            Install: {
                POST(e) {
                    return I("/app/install/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            }
        },
        Za = {
            Pppoe: {
                GET() {
                    return I("/guide/pppoe/", {
                        method: "GET"
                    })
                },
                POST(e) {
                    return I("/guide/pppoe/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            DnsConfig: {
                GET() {
                    return I("/guide/dns-config/", {
                        method: "GET"
                    })
                },
                POST(e) {
                    return I("/guide/dns-config/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            DhcpClient: {
                POST(e) {
                    return I("/guide/dhcp-client/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            ClientModel: {
                GET() {
                    return I("/guide/client-mode/", {
                        method: "GET"
                    })
                },
                POST(e) {
                    return I("/guide/client-mode/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            GatewayRouter: {
                POST(e) {
                    return I("/guide/gateway-router/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            DockerStatus: {
                GET() {
                    return I("/guide/docker/status/", {
                        method: "GET"
                    })
                }
            },
            DockerPartitionList: {
                GET() {
                    return I("/guide/docker/partition/list/", {
                        method: "GET"
                    })
                }
            },
            DockerTransfer: {
                POST(e) {
                    return I("/guide/docker/transfer/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            DockerSwitch: {
                POST(e) {
                    return I("/guide/docker/switch/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            DownloadService: {
                Status: {
                    GET() {
                        return I("/guide/download-service/status/", {
                            method: "GET"
                        })
                    }
                }
            },
            DownloadPartition: {
                List: {
                    GET() {
                        return I("/guide/download/partition/list/", {
                            method: "GET"
                        })
                    }
                }
            },
            Aria2Init: {
                POST(e) {
                    return I("/guide/aria2/init/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            qbitorrentInit: {
                POST(e) {
                    return I("/guide/qbittorrent/init/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            transmissionInit: {
                POST(e) {
                    return I("/guide/transmission/init/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            GetLan: {
                GET() {
                    return I("/guide/lan/", {
                        method: "GET"
                    })
                }
            },
            LanIp: {
                POST(e) {
                    return I("/guide/lan/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            SoftSource: {
                POST(e) {
                    return I("/guide/soft-source/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            GetSoftSource: {
                GET() {
                    return I("/guide/soft-source/", {
                        method: "GET"
                    })
                }
            },
            SoftSourceList: {
                GET() {
                    return I("/guide/soft-source/list/", {
                        method: "GET"
                    })
                }
            },
            PostDdns: {
                POST(e) {
                    return I("/u/guide/ddns/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            GetDdns: {
                GET() {
                    return I("/u/guide/ddns/", {
                        method: "GET"
                    })
                }
            },
            Ddnsto: {
                POST(e) {
                    return I("/guide/ddnsto/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            DdntoConfig: {
                GET() {
                    return I("/guide/ddnsto/config/", {
                        method: "GET"
                    })
                }
            },
            DdnstoAddress: {
                POST(e) {
                    return I("/guide/ddnsto/address/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            }
        },
        Ja = {
            Create: {
                POST(e) {
                    return I("/raid/create/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            Delete: {
                POST(e) {
                    return I("/raid/delete/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            Add: {
                POST(e) {
                    return I("/raid/add/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            Remove: {
                POST(e) {
                    return I("/raid/remove/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            Recover: {
                POST(e) {
                    return I("/raid/recover/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            Detail: {
                POST(e) {
                    return I("/raid/detail/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            List: {
                GET() {
                    return I("/raid/list/", {
                        method: "GET"
                    })
                }
            },
            CreateList: {
                GET() {
                    return I("/raid/create/list/", {
                        method: "GET"
                    })
                }
            },
            Autofix: {
                GET() {
                    return I("/raid/autofix/", {
                        method: "GET"
                    })
                }
            }
        },
        Xa = {
            Log: {
                GET() {
                    return I("/smart/log/", {
                        method: "GET"
                    })
                }
            },
            List: {
                GET() {
                    return I("/u/smart/list/", {
                        method: "GET"
                    })
                }
            },
            Config: {
                GET() {
                    return I("/smart/config/", {
                        method: "GET"
                    })
                },
                POST(e) {
                    return I("/smart/config/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                }
            },
            Test: {
                POST(e) {
                    return I("/u/smart/test/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify(e)
                    })
                },
                Result: {
                    POST(e) {
                        return I("/smart/test/result/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                            body: JSON.stringify(e)
                        })
                    }
                }
            },
            Attribute: {
                Result: {
                    POST(e) {
                        return I("/smart/attribute/result/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                            body: JSON.stringify(e)
                        })
                    }
                }
            },
            Extend: {
                Result: {
                    POST(e) {
                        return I("/smart/extend/result/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                            body: JSON.stringify(e)
                        })
                    }
                }
            }
        };
    var Ka = Object.freeze(Object.defineProperty({
            __proto__: null,
            Network: Ra,
            System: Ua,
            Nas: Wa,
            App: Ha,
            Guide: Za,
            Raid: Ja,
            Smart: Xa
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        S = J({}, Ka);
    const Ke = Qt("app", {
        state: () => ({
            portitemStyle: {
                show: !1,
                left: 0,
                top: 0,
                portitem: {
                    name: "",
                    macAddress: "",
                    linkSpeed: "",
                    linkState: "",
                    rx_packets: "",
                    tx_packets: "",
                    interfaceNames: [],
                    master: "",
                    duplex: ""
                }
            }
        })
    });
    Qt("guide", {});
    const Qe = Qt("nas", {
            state: () => ({
                webdav: {}
            })
        }),
        le = Qt("network", {
            state: () => ({
                status: {},
                statistics: {},
                deviceList: {}
            }),
            getters: {},
            actions: {
                updateNetworkStatus(e) {
                    this.status = e
                },
                requestNetworkStatistics() {
                    return T(this, null, function* () {
                        try {
                            const e = yield S.Network.Statistics.GET();
                            e != null && e.data && e.data.result && (this.statistics = e.data.result)
                        } catch (e) {
                            console.log(e)
                        }
                    })
                },
                requestDeviceList() {
                    S.Network.Device.List.GET().then(e => {
                        if (e != null && e.data) {
                            const {
                                result: a
                            } = e == null ? void 0 : e.data;
                            a && (this.deviceList = a)
                        }
                    })
                },
                incrTime() {
                    this.status.uptimeStamp && this.status.uptimeStamp++
                }
            }
        }),
        Ce = Qt("system", {
            state: () => ({
                version: {},
                checkUpdate: null,
                systemStatus: {}
            }),
            getters: {},
            actions: {
                incrTime() {
                    var e;
                    (e = this.systemStatus) != null && e.uptime && this.systemStatus.uptime++
                },
                requestVersion() {
                    S.System.Version.GET().then(e => {
                        var a;
                        (a = e == null ? void 0 : e.data) != null && a.result && (this.version = e.data.result)
                    })
                },
                requestCheckUpdate() {
                    S.System.CheckUpdate.GET().then(e => {
                        var a;
                        (a = e == null ? void 0 : e.data) != null && a.result && (this.checkUpdate = e.data.result)
                    })
                },
                updateSystemStatus(e) {
                    this.systemStatus = e
                }
            }
        });
    let Re = !1;
    const Qa = () => {
        if (Re) return;
        Re = !0;
        let e = !0,
            a = !0;
        const o = le(),
            n = Ce(),
            s = function () {
                return S.System.Status.GET().then(p => {
                    p != null && p.data.result && n.updateSystemStatus(p.data.result)
                }).finally(() => {
                    setTimeout(s, 5e3), e && (setInterval(() => {
                        n.incrTime()
                    }, 1e3), e = !1)
                })
            },
            c = function () {
                return S.Network.Status.GET().then(p => {
                    if (p != null && p.data) {
                        const {
                            result: f
                        } = p == null ? void 0 : p.data;
                        f && o.updateNetworkStatus(f)
                    }
                }).finally(() => {
                    setTimeout(c, 5e3), a && (setInterval(() => {
                        o.incrTime()
                    }, 1e3), a = !1)
                })
            };
        c(), o.requestDeviceList(), setTimeout(() => {
            n.requestCheckUpdate(), n.requestVersion(), s()
        }, 1100)
    };
    var Y = (e, a) => {
        const o = e.__vccOpts || e;
        for (const [n, s] of a) o[n] = s;
        return o
    };
    const to = P({
        setup(e) {
            const a = Ke(),
                o = R(() => a.portitemStyle.portitem),
                n = R(() => a.portitemStyle.show),
                s = R(() => ({
                    bottom: `calc(100% - ${a.portitemStyle.top}px)`,
                    left: `${a.portitemStyle.left}px`
                })),
                c = d => {
                    switch (d) {
                        case "full":
                            return "Full duplex";
                        case "half":
                            return "Half duplex"
                    }
                },
                p = d => {
                    a.portitemStyle.show = !0
                },
                f = d => {
                    a.portitemStyle.show = !1
                };
            return (d, l) => w(n) ? (i(), r("div", {
                key: 0,
                class: "disk-item-tooltip",
                style: It(w(s)),
                onMouseenter: p,
                onMouseleave: f
            }, [t("div", null, h(c(w(o).duplex)), 1), t("div", null, "Name\uFF1A" + h(w(o).name || "--"), 1), t("div", null, "MAC\uFF1A" + h(w(o).macAddress || "--"), 1), t("div", null, "Down\uFF1A" + h(w(o).rx_packets || "--"), 1), t("div", null, "Up\uFF1A" + h(w(o).tx_packets || "--"), 1)], 36)) : C("", !0)
        }
    });
    var eo = Y(to, [
        ["__scopeId", "data-v-57f1326f"]
    ]);
    const ao = {
            id: "main"
        },
        oo = P({
            setup(e) {
                return (a, o) => {
                    const n = X("router-view");
                    return i(), r("div", ao, [D(n), D(eo)])
                }
            }
        });
    var no = Y(oo, [
        ["__scopeId", "data-v-9bc295c2"]
    ]);
    const io = {},
        ro = {
            t: "1640593669834",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "54870",
            width: "128",
            height: "128"
        },
        so = t("path", {
            d: "M148.7872 57.4464h177.152c64.9216 0 118.0672 53.1456 118.0672 118.0672v295.2192H148.7872C83.8656 470.7328 30.72 417.5872 30.72 352.5632v-177.152C30.72 110.592 83.8656 57.4464 148.7872 57.4464z m0 531.3536h295.2192v295.2192c0 64.9216-53.1456 118.0672-118.0672 118.0672h-177.152C83.8656 1001.984 30.72 948.9408 30.72 883.9168v-177.152C30.72 641.9456 83.8656 588.8 148.7872 588.8z m0 0M768.7168 559.2064L562.0736 346.7264c-23.6544-17.7152-35.4304-53.1456-35.4304-82.6368s11.776-59.0848 35.4304-82.6368L686.08 57.4464C733.2864 10.24 810.0864 10.24 851.3536 57.4464l124.0064 124.0064c23.6544 23.6544 35.4304 53.1456 35.4304 82.6368s-11.776 59.0848-35.4304 82.6368L768.7168 559.2064z m0-478.208c-17.7152 0-29.4912 5.9392-41.3696 17.7152l-123.904 124.0064c-11.776 11.776-17.7152 23.6544-17.7152 41.3696s5.9392 29.4912 17.7152 41.3696l165.2736 165.2736 165.2736-165.2736c11.776-11.776 17.7152-23.6544 17.7152-41.3696s-5.9392-29.4912-17.7152-41.3696L809.984 98.7136c-11.776-11.776-23.552-17.7152-41.2672-17.7152z m0 0",
            "p-id": "54871"
        }, null, -1),
        uo = t("path", {
            d: "M562.0736 588.8h295.2192c64.9216 0 118.0672 53.1456 118.0672 118.0672v177.152c0 64.9216-53.1456 118.0672-118.0672 118.0672h-177.152c-64.9216 0-118.0672-53.1456-118.0672-118.0672V588.8z m0 0",
            "p-id": "54872"
        }, null, -1),
        lo = [so, uo];

    function co(e, a) {
        return i(), r("svg", ro, lo)
    }
    var po = Y(io, [
        ["render", co]
    ]);
    const fo = {},
        mo = {
            t: "1640598743438",
            class: "icon",
            viewBox: "0 0 1036 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "65341",
            width: "128",
            height: "128"
        },
        bo = t("path", {
            d: "M984.177778 432.355556l-45.511111 0c-22.755556 0-45.511111-17.066667-51.2-39.822222l-28.444444-68.266667C847.644444 312.888889 853.333333 284.444444 870.4 267.377778l34.133333-34.133333c17.066667-17.066667 17.066667-39.822222 0-56.888889l-56.888889-56.888889c-17.066667-17.066667-39.822222-17.066667-56.888889 0l-34.133333 34.133333C739.555556 170.666667 711.111111 176.355556 694.044444 164.977778L625.777778 136.533333c-22.755556-5.688889-39.822222-28.444444-39.822222-51.2L585.955556 39.822222c0-22.755556-17.066667-39.822222-39.822222-39.822222L472.177778 0C449.422222 0 432.355556 17.066667 432.355556 39.822222l0 45.511111c0 22.755556-17.066667 45.511111-39.822222 51.2L329.955556 164.977778C312.888889 176.355556 284.444444 170.666667 267.377778 153.6L233.244444 119.466667c-17.066667-17.066667-39.822222-17.066667-56.888889 0l-56.888889 56.888889c-17.066667 17.066667-17.066667 39.822222 0 56.888889l34.133333 34.133333C170.666667 284.444444 176.355556 312.888889 164.977778 329.955556L136.533333 398.222222C130.844444 415.288889 108.088889 432.355556 85.333333 432.355556l-45.511111 0C17.066667 432.355556 0 449.422222 0 472.177778l0 79.644444c0 22.755556 17.066667 39.822222 39.822222 39.822222l45.511111 0c22.755556 0 45.511111 17.066667 51.2 39.822222l28.444444 68.266667C176.355556 711.111111 170.666667 739.555556 153.6 756.622222l-34.133333 34.133333c-17.066667 17.066667-17.066667 39.822222 0 56.888889l56.888889 56.888889c17.066667 17.066667 39.822222 17.066667 56.888889 0l34.133333-34.133333C284.444444 853.333333 312.888889 847.644444 329.955556 859.022222L398.222222 887.466667c22.755556 5.688889 39.822222 28.444444 39.822222 51.2l0 45.511111c0 22.755556 17.066667 39.822222 39.822222 39.822222l79.644444 0c22.755556 0 39.822222-17.066667 39.822222-39.822222l0-45.511111c0-22.755556 17.066667-45.511111 39.822222-51.2l68.266667-28.444444c17.066667-11.377778 45.511111-5.688889 62.577778 11.377778l34.133333 34.133333c17.066667 17.066667 39.822222 17.066667 56.888889 0l56.888889-56.888889c17.066667-17.066667 17.066667-39.822222 0-56.888889l-34.133333-34.133333c-17.066667-17.066667-17.066667-45.511111-11.377778-62.577778l28.444444-68.266667c5.688889-22.755556 28.444444-39.822222 51.2-39.822222l45.511111 0c22.755556 0 39.822222-17.066667 39.822222-39.822222L1035.377778 472.177778C1024 449.422222 1006.933333 432.355556 984.177778 432.355556L984.177778 432.355556zM711.111111 512c0 108.088889-91.022222 199.111111-199.111111 199.111111-108.088889 0-199.111111-85.333333-199.111111-199.111111 0-108.088889 85.333333-199.111111 199.111111-199.111111C620.088889 312.888889 711.111111 403.911111 711.111111 512L711.111111 512zM711.111111 512",
            "p-id": "65342"
        }, null, -1),
        vo = [bo];

    function go(e, a) {
        return i(), r("svg", mo, vo)
    }
    var _o = Y(fo, [
        ["render", go]
    ]);
    const ho = {},
        xo = {
            t: "1640599890701",
            class: "icon",
            viewBox: "0 0 1565 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "76947",
            width: "128",
            height: "128"
        },
        ko = t("path", {
            d: "M1206.477959 299.331595c-27.357038 0-53.867311 3.354494-79.465683 9.151581C1078.518669 130.792698 916.428217 0 723.365689 0 492.068443 0 304.575027 187.493416 304.575027 418.790662c0 16.055976 1.074741 31.786273 2.865975 47.386299-9.184149-0.911901-18.400865-1.40042-27.812989-1.40042C125.191018 464.743973 0 589.934991 0 744.371987c0 154.469563 125.191018 279.628013 279.595446 279.628013 59.990077 0 221.233764 0 394.527575 0l0-302.295274L496.986197 721.704726l285.457668-339.031868 285.457668 339.031868-177.136823 0 0 302.295274c139.748871 0 262.204185 0 315.71325 0 197.947713 0 358.40977-168.34349 358.40977-366.291203S1404.425673 299.331595 1206.477959 299.331595z",
            "p-id": "76948"
        }, null, -1),
        wo = [ko];

    function yo(e, a) {
        return i(), r("svg", xo, wo)
    }
    var Fo = Y(ho, [
        ["render", yo]
    ]);
    const Eo = {},
        Co = {
            t: "1640599792937",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "68605",
            width: "128",
            height: "128"
        },
        $o = t("path", {
            d: "M512 825.6c-211.2 0-377.6-57.6-377.6-128l0 0L134.4 896l0 0c6.4 70.4 172.8 128 377.6 128 204.8 0 371.2-57.6 377.6-128l0 0 0-204.8 0 0C889.6 768 723.2 825.6 512 825.6L512 825.6z",
            "p-id": "68606"
        }, null, -1),
        Do = t("path", {
            d: "M512 544c-211.2 0-377.6-57.6-377.6-128l0 0 0 204.8 0 0c6.4 70.4 172.8 128 377.6 128 204.8 0 371.2-57.6 377.6-128l0 0L889.6 416l0 0C889.6 486.4 723.2 544 512 544L512 544z",
            "p-id": "68607"
        }, null, -1),
        Bo = t("path", {
            d: "M889.6 128 889.6 128c0-70.4-166.4-128-377.6-128C300.8 0 134.4 57.6 134.4 128l0 0 0 0 0 204.8 0 0c6.4 70.4 172.8 128 377.6 128 204.8 0 371.2-57.6 377.6-128l0 0L889.6 128 889.6 128 889.6 128zM512 217.6c-153.6 0-281.6-44.8-281.6-96 0-51.2 128-96 281.6-96 153.6 0 281.6 44.8 281.6 96C793.6 179.2 665.6 217.6 512 217.6L512 217.6z",
            "p-id": "68608"
        }, null, -1),
        Yo = [$o, Do, Bo];

    function Ao(e, a) {
        return i(), r("svg", Co, Yo)
    }
    var So = Y(Eo, [
        ["render", Ao]
    ]);
    const zo = {},
        Po = {
            t: "1640575557247",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "4211",
            width: "128",
            height: "128"
        },
        To = t("path", {
            d: "M560 800l-10.464-416h-75.072L464 800h96z m-14.144-493.984c9.44-9.312 14.144-20.672 14.144-34.016 0-13.6-4.704-24.992-14.144-34.208A46.784 46.784 0 0 0 512 224c-13.12 0-24.448 4.608-33.856 13.792A45.856 45.856 0 0 0 464 272c0 13.344 4.704 24.704 14.144 34.016 9.408 9.312 20.704 13.984 33.856 13.984 13.12 0 24.448-4.672 33.856-13.984zM512 32C246.912 32 32 246.912 32 512c0 265.088 214.912 480 480 480 265.088 0 480-214.912 480-480 0-265.088-214.912-480-480-480z m0 64c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z",
            "p-id": "4212"
        }, null, -1),
        Io = [To];

    function Lo(e, a) {
        return i(), r("svg", Po, Io)
    }
    var Mo = Y(zo, [
        ["render", Lo]
    ]);
    const Oo = {},
        No = {
            t: "1640681742480",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "80687",
            width: "128",
            height: "128"
        },
        qo = t("path", {
            d: "M899.892468 123.889088c0-44.342099-36.286708-80.620486-80.624646-80.620486H204.728017C160.385918 43.268602 124.107532 79.546988 124.107532 123.889088v802.847056c0 44.342099 36.278386 80.620486 80.620485 80.620486h614.539805c44.337938 0 80.624646-36.278386 80.624646-80.620486V123.889088z",
            fill: "#D0D0DB",
            "p-id": "80688"
        }, null, -1),
        Vo = t("path", {
            d: "M169.8768 977.7772V174.930143c0-44.342099 36.278386-80.620486 80.620486-80.620485h614.539804c9.936092 0 19.426974 1.905666 28.239639 5.23434-11.525534-30.507298-40.996782-52.389169-75.398629-52.389169H203.342457c-44.342099 0-80.620486 36.278386-80.620486 80.620486v802.851217c0 34.410168 21.881871 63.873094 52.385008 75.381985A79.730065 79.730065 0 0 1 169.8768 977.7772z",
            fill: "#FFFFFF",
            "p-id": "80689"
        }, null, -1),
        Go = t("path", {
            d: "M820.657543 40.497481H206.117739c-44.342099 0-80.620486 36.278386-80.620486 80.620485v802.847057c0 44.342099 36.278386 80.620486 80.620486 80.620486h614.539804c44.337938 0 80.624646-36.278386 80.624647-80.620486V121.117966c0-44.342099-36.286708-80.620486-80.624647-80.620485z m19.60173 828.785749c0 40.846992-33.43237 74.279362-74.287684 74.279361H199.780776c-40.855313 0-74.279362-33.424048-74.279362-74.279361V129.593603c0-40.855313 33.424048-74.279362 74.279362-74.279362h566.203296c40.842831 0 74.283522 33.424048 74.283522 74.279362l-0.008321 739.689627z",
            fill: "#6E6E96",
            "p-id": "80690"
        }, null, -1),
        jo = t("path", {
            d: "M815.106979 1024H200.567175C146.933914 1024 103.303319 980.369405 103.303319 926.736144V123.889088C103.303319 70.255827 146.933914 26.625232 200.567175 26.625232h614.539804c53.633261 0 97.268017 43.630595 97.268017 97.263856v802.847056c0 53.633261-43.634756 97.263856-97.268017 97.263856zM200.567175 59.911972C165.287391 59.911972 136.590059 88.609303 136.590059 123.889088v802.847056c0 35.279784 28.697331 63.977115 63.977116 63.977115h614.539804c35.279784 0 63.981276-28.697331 63.981276-63.977115V123.889088c0-35.279784-28.701492-63.977115-63.981276-63.977116H200.567175z",
            fill: "#6E6E96",
            "p-id": "80691"
        }, null, -1),
        Ro = t("path", {
            d: "M301.946104 941.515457h429.985632v65.841173H301.946104z",
            fill: "#8A8AA1",
            "p-id": "80692"
        }, null, -1),
        Uo = t("path", {
            d: "M731.931736 1024H301.946104a16.64337 16.64337 0 0 1-16.64337-16.64337V941.515457a16.64337 16.64337 0 0 1 16.64337-16.64337h429.985632a16.64337 16.64337 0 0 1 16.64337 16.64337v65.841173a16.64337 16.64337 0 0 1-16.64337 16.64337z m-413.342262-33.286741h396.698892v-32.554432H318.589474v32.554432z",
            fill: "#6E6E96",
            "p-id": "80693"
        }, null, -1),
        Wo = t("path", {
            d: "M337.230049 960.318304h20.804213v47.038326h-20.804213zM386.565159 960.318304h20.804213v47.038326h-20.804213zM435.891948 960.318304h20.804213v47.038326h-20.804213zM485.231219 960.318304h20.804213v47.038326h-20.804213zM534.558008 960.318304h20.804213v47.038326h-20.804213zM583.897279 960.318304h20.804213v47.038326h-20.804213zM633.224068 960.318304h20.804213v47.038326h-20.804213zM682.563339 960.318304h20.804213v47.038326h-20.804213z",
            fill: "#FFE599",
            "p-id": "80694"
        }, null, -1),
        Ho = t("path", {
            d: "M219.153659 140.794591m-26.874883 0a26.874882 26.874882 0 1 0 53.749765 0 26.874882 26.874882 0 1 0-53.749765 0Z",
            fill: "#ADADD1",
            "p-id": "80695"
        }, null, -1),
        Zo = t("path", {
            d: "M219.153659 184.312843c-23.995579 0-43.518252-19.522673-43.518253-43.518252s19.522673-43.518252 43.518253-43.518253 43.518252 19.522673 43.518252 43.518253-19.522673 43.518252-43.518252 43.518252z m0-53.749764c-5.642103 0-10.231512 4.589409-10.231512 10.231512s4.589409 10.231512 10.231512 10.231512 10.231512-4.589409 10.231511-10.231512-4.589409-10.231512-10.231511-10.231512z",
            fill: "#6E6E96",
            "p-id": "80696"
        }, null, -1),
        Jo = t("path", {
            d: "M801.28466 140.794591m-26.870721 0a26.870721 26.870721 0 1 0 53.741442 0 26.870721 26.870721 0 1 0-53.741442 0Z",
            fill: "#ADADD1",
            "p-id": "80697"
        }, null, -1),
        Xo = t("path", {
            d: "M801.28466 184.308683c-23.995579 0-43.514092-19.518512-43.514091-43.514092s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514092z m0-53.741443c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
            fill: "#6E6E96",
            "p-id": "80698"
        }, null, -1),
        Ko = t("path", {
            d: "M801.280499 905.23291m-26.870721 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
            fill: "#ADADD1",
            "p-id": "80699"
        }, null, -1),
        Qo = t("path", {
            d: "M801.280499 948.747001c-23.995579 0-43.514092-19.518512-43.514091-43.514091s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
            fill: "#6E6E96",
            "p-id": "80700"
        }, null, -1),
        tn = t("path", {
            d: "M219.153659 905.23291m-26.870722 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
            fill: "#ADADD1",
            "p-id": "80701"
        }, null, -1),
        en = t("path", {
            d: "M219.153659 948.747001c-23.995579 0-43.514092-19.518512-43.514092-43.514091s19.518512-43.514092 43.514092-43.514092 43.514092 19.518512 43.514091 43.514092-19.522673 43.514092-43.514091 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
            fill: "#6E6E96",
            "p-id": "80702"
        }, null, -1),
        an = t("path", {
            d: "M520.972857 777.43263c-142.542145 0-258.508988-115.971004-258.508988-258.52147a16.64337 16.64337 0 0 1 33.28674 0c0 124.19699 101.033579 225.23473 225.222248 225.23473s225.222248-101.03774 225.222248-225.23473c0-124.188668-101.033579-225.218087-225.222248-225.218087a16.64337 16.64337 0 0 1 0-33.286741c142.542145 0 258.508988 115.966843 258.508988 258.504828 0 142.550466-115.966843 258.521471-258.508988 258.52147z",
            fill: "#6E6E96",
            "p-id": "80703"
        }, null, -1),
        on = t("path", {
            d: "M520.968696 518.919481m-83.312551 0a83.312551 83.312551 0 1 0 166.625102 0 83.312551 83.312551 0 1 0-166.625102 0Z",
            fill: "#A9A9BA",
            "p-id": "80704"
        }, null, -1),
        nn = t("path", {
            d: "M520.968696 618.875402c-55.114521 0-99.955921-44.83724-99.955921-99.95176 0-55.118682 44.8414-99.955921 99.955921-99.955921s99.95176 44.8414 99.95176 99.955921c0 55.11036-44.83724 99.95176-99.95176 99.95176z m0-166.625101c-36.761044 0-66.669181 29.908136-66.66918 66.66918s29.908136 66.66502 66.66918 66.66502 66.66502-29.908136 66.66502-66.66502c0-36.761044-29.903976-66.669181-66.66502-66.66918z",
            fill: "#6E6E96",
            "p-id": "80705"
        }, null, -1),
        rn = t("path", {
            d: "M301.946104 941.515457h429.985632v36.977408H301.946104z",
            fill: "#6E6E96",
            "p-id": "80706"
        }, null, -1),
        sn = [qo, Vo, Go, jo, Ro, Uo, Wo, Ho, Zo, Jo, Xo, Ko, Qo, tn, en, an, on, nn, rn];

    function dn(e, a) {
        return i(), r("svg", No, sn)
    }
    var un = Y(Oo, [
        ["render", dn]
    ]);
    const ln = {},
        cn = {
            t: "1640775712185",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2996",
            width: "128",
            height: "128"
        },
        pn = t("path", {
            d: "M894.185422 128.023792 129.814578 445.743994 445.99982 577.744353 571.860343 893.929596Z",
            "p-id": "2997"
        }, null, -1),
        fn = [pn];

    function mn(e, a) {
        return i(), r("svg", cn, fn)
    }
    var bn = Y(ln, [
        ["render", mn]
    ]);
    const vn = {
            class: "progress"
        },
        gn = P({
            props: {
                value: {
                    type: Number,
                    required: !0
                },
                text: {
                    type: String
                }
            },
            setup(e) {
                const a = e,
                    o = R(() => a.value >= 80 ? "#e45e5e" : a.value >= 70 ? "#ff9800" : a.value >= 60 ? "#297ff3" : a.value > 0 ? "#53c31b" : "");
                return (n, s) => (i(), r("div", vn, [t("div", {
                    class: ot(["progress-value", `${e.value>50}`]),
                    style: It({
                        width: `${e.value}%`,
                        backgroundColor: w(o)
                    })
                }, [t("span", null, h(e.text), 1)], 6), Dt(n.$slots, "default", {}, void 0, !0)]))
            }
        });
    var ta = Y(gn, [
        ["__scopeId", "data-v-733828e1"]
    ]);
    const _n = {},
        hn = {
            t: "1649907260906",
            viewBox: "-8 248 1042 530",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2793",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        xn = t("path", {
            d: "M764.904497 251.418146 259.086289 251.418146c-143.076626 0-259.065314 115.989711-259.065314 259.065314 0 143.077649 115.988688 259.063267 259.065314 259.063267l505.818207 0c143.074579 0 259.063267-115.985618 259.063267-259.063267C1023.967764 367.407857 907.980099 251.418146 764.904497 251.418146zM764.904497 747.164974c-130.507356 0-236.682537-106.175181-236.682537-236.682537S634.397141 273.798876 764.904497 273.798876s236.683561 106.176205 236.683561 236.683561S895.411853 747.164974 764.904497 747.164974z",
            "p-id": "2794",
            fill: "#52C41A"
        }, null, -1),
        kn = [xn];

    function wn(e, a) {
        return i(), r("svg", hn, kn)
    }
    var yn = Y(_n, [
        ["render", wn]
    ]);
    const Fn = {},
        En = {
            t: "1649907515643",
            viewBox: "-8 248 1042 530",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2971",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        Cn = t("path", {
            d: "M764.867148 249.793136 259.0735 249.793136c-143.070486 0-259.052011 115.984594-259.052011 259.052011 0 143.07151 115.982548 259.050987 259.052011 259.050987l505.793648 0c143.067416 0 259.050987-115.979478 259.050987-259.050987C1023.917112 365.778754 907.933541 249.793136 764.867148 249.793136zM259.0735 745.516428c-130.501216 0-236.671281-106.172111-236.671281-236.671281 0-130.501216 106.170065-236.671281 236.671281-236.671281S495.744781 378.344954 495.744781 508.84617C495.744781 639.34534 389.574716 745.516428 259.0735 745.516428z",
            "p-id": "2972",
            fill: "#999"
        }, null, -1),
        $n = [Cn];

    function Dn(e, a) {
        return i(), r("svg", En, $n)
    }
    var Bn = Y(Fn, [
        ["render", Dn]
    ]);
    const Yn = {
            class: "checkbox_switch_on"
        },
        An = {
            class: "checkbox_switch_off"
        },
        Sn = P({
            props: {
                modelValue: {
                    type: Boolean,
                    required: !0
                },
                height: {
                    type: String,
                    default: "100%"
                }
            },
            emits: ["update:modelValue"],
            setup(e, {
                emit: a
            }) {
                const o = e,
                    n = R({
                        get: () => o.modelValue.valueOf(),
                        set: s => a("update:modelValue", s)
                    });
                return (s, c) => (i(), r("label", {
                    class: "checkbox_switch",
                    style: It({
                        height: e.height
                    })
                }, [z(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": c[0] || (c[0] = p => Ea(n) ? n.value = p : null)
                }, null, 512), [
                    [Lt, w(n)]
                ]), t("span", Yn, [D(yn)]), t("span", An, [D(Bn)]), Dt(s.$slots, "default", {}, void 0, !0)], 4))
            }
        });
    var ea = Y(Sn, [
        ["__scopeId", "data-v-20f08566"]
    ]);
    const zn = {},
        Pn = {
            t: "1641369474206",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "7685",
            width: "128",
            height: "128"
        },
        Tn = t("path", {
            d: "M757.76 637.44l-218.88 245.76c-14.72 16.64-40.32 16.64-54.4 0L265.6 637.44C244.48 613.76 261.12 576 293.12 576l437.76 0C762.24 576 779.52 613.76 757.76 637.44z",
            "p-id": "7686"
        }, null, -1),
        In = [Tn];

    function Ln(e, a) {
        return i(), r("svg", Pn, In)
    }
    var Mn = Y(zn, [
        ["render", Ln]
    ]);
    const On = {},
        Nn = {
            t: "1641369492518",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "7831",
            width: "128",
            height: "128"
        },
        qn = t("path", {
            d: "M758.4 385.92 539.52 140.16c-14.72-16.64-40.32-16.64-54.4 0L266.24 385.92C244.48 409.6 261.76 448 293.12 448l437.76 0C762.88 448 779.52 409.6 758.4 385.92z",
            "p-id": "7832"
        }, null, -1),
        Vn = [qn];

    function Gn(e, a) {
        return i(), r("svg", Nn, Vn)
    }
    var jn = Y(On, [
        ["render", Gn]
    ]);
    const Rn = {};

    function Un(e, a) {
        return i(), r("article", null, [Dt(e.$slots, "default", {}, void 0, !0)])
    }
    var Wn = Y(Rn, [
        ["render", Un],
        ["__scopeId", "data-v-bd286d4e"]
    ]);
    const Hn = {
            class: "cover"
        },
        Zn = {
            class: "thumbnail"
        },
        Jn = P({
            emits: ["click"],
            setup(e, {
                emit: a
            }) {
                const o = () => {
                    a("click")
                };
                return (n, s) => (i(), M(Wn, null, {
                    default: V(() => [t("a", {
                        onClick: o
                    }, [t("div", Hn, [t("div", Zn, [Dt(n.$slots, "default", {}, void 0, !0)])])])]),
                    _: 3
                }))
            }
        });
    var Xn = Y(Jn, [
        ["__scopeId", "data-v-123deb20"]
    ]);
    const Kn = e => (O("data-v-169d5b59"), e = e(), N(), e),
        Qn = {
            class: "select-editable"
        },
        ti = {
            selected: "",
            value: ""
        },
        ei = ["value"],
        ai = Kn(() => t("option", {
            value: "useInput"
        }, "- -Customize- -", -1)),
        oi = ["placeholder"],
        ni = P({
            props: {
                modelValue: {
                    type: String,
                    required: !0
                },
                title: {
                    type: String,
                    default: ""
                },
                options: {
                    type: Array,
                    default: []
                }
            },
            emits: ["update:modelValue"],
            setup(e, {
                emit: a
            }) {
                const o = e,
                    n = y(""),
                    s = y(""),
                    c = R({
                        get: () => o.modelValue.valueOf(),
                        set: l => a("update:modelValue", l)
                    }),
                    p = l => {
                        l === n.value || n.value === "useInput" && l === s.value || (l === "" || o.options.some(u => u.key === l) ? n.value = l : (s.value = l, n.value = "useInput"))
                    };
                Ca(() => o.modelValue, l => {
                    p(l)
                }), Ft(() => {
                    const l = c.value;
                    p(l)
                });
                const f = l => {
                        n.value === "useInput" ? c.value = s.value : c.value = n.value
                    },
                    d = l => {
                        c.value = s.value
                    };
                return (l, u) => (i(), r("label", null, [t("div", Qn, [z(t("select", {
                    "onUpdate:modelValue": u[0] || (u[0] = m => n.value = m),
                    autocomplete: "off",
                    onChange: f
                }, [t("option", ti, "\u8BF7\u9009\u62E9" + h(e.title), 1), (i(!0), r(L, null, j(e.options, (m, b) => (i(), r("option", {
                    value: m.key,
                    key: b
                }, h(m.value || m.key), 9, ei))), 128)), ai], 544), [
                    [Q, n.value, void 0, {
                        trim: !0
                    }]
                ]), n.value == "useInput" ? z((i(), r("input", {
                    key: 0,
                    type: "text",
                    "onUpdate:modelValue": u[1] || (u[1] = m => s.value = m),
                    required: "",
                    placeholder: "\u8BF7\u8F93\u5165" + e.title,
                    onChange: d
                }, null, 40, oi)), [
                    [W, s.value, void 0, {
                        trim: !0
                    }]
                ]) : C("", !0)])]))
            }
        });
    var Tt = Y(ni, [
        ["__scopeId", "data-v-169d5b59"]
    ]);
    const ii = {
            t: "1631799919469",
            class: "icon",
            viewBox: "0 0 1047 1047",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "3453",
            width: "128",
            height: "128"
        },
        ri = P({
            props: {
                size: {
                    type: [Number, String],
                    default: 50
                },
                color: {
                    type: String,
                    default: "#fff"
                }
            },
            setup(e) {
                const a = o => {
                    if (o == null) return;
                    if (typeof o == "number") return o + "px";
                    const n = o.toString();
                    return parseInt(n) + "" == n ? n + "px" : n
                };
                return (o, n) => (i(), r("div", {
                    class: "loading",
                    style: It({
                        width: a(e.size),
                        height: a(e.size)
                    })
                }, [(i(), r("svg", ii, [t("path", {
                    d: "M522.695111 1.991111c-26.339556 0.170667-47.416889 21.475556-47.672889 48.753778-0.284444 26.453333-0.056889 52.963556-0.056889 79.445333 0 27.249778-0.369778 54.528 0.113778 81.777778 0.483556 27.050667 22.016 47.132444 49.351111 46.904889a47.786667 47.786667 0 0 0 47.729778-47.445333c0.284444-53.76 0.284444-107.52-0.028444-161.251556-0.170667-27.676444-21.902222-48.355556-49.436445-48.184889m-195.896889 88.092445c-8.334222-14.222222-21.646222-21.276444-38.314666-21.333334-35.128889 0-56.576 36.949333-38.968889 68.152889a11616.995556 11616.995556 0 0 0 78.961777 137.614222 44.942222 44.942222 0 0 0 61.838223 16.896c21.304889-12.202667 29.667556-38.968889 17.379555-60.871111-26.453333-47.104-53.560889-93.866667-80.896-140.458666m-228.693333 234.524444c44.316444 25.799111 88.746667 51.342222 133.176889 76.970667 6.712889 3.896889 13.681778 6.912 21.703111 6.428444 20.138667 0.142222 35.953778-11.946667 41.301333-31.573333 5.006222-18.261333-2.673778-36.721778-20.224-46.990222-44.629333-26.026667-89.372444-51.882667-134.115555-77.710223-22.528-12.999111-47.815111-7.025778-59.818667 13.909334-12.231111 21.248-4.977778 45.624889 17.948444 58.965333m34.161778 235.975111c26.396444 0 52.821333 0.199111 79.217778-0.085333 23.409778-0.256 39.139556-16.412444 38.798222-39.139556-0.341333-21.617778-16.924444-37.347556-39.594666-37.376-51.655111-0.056889-103.310222-0.056889-154.965334 0.028445-24.177778 0.056889-40.704 15.985778-40.561778 38.684444 0.142222 22.186667 16.583111 37.745778 40.192 37.859556 25.656889 0.142222 51.285333 0.028444 76.913778 0m151.722667 100.238222a34.247111 34.247111 0 0 0-46.876445-12.942222 13764.778667 13764.778667 0 0 0-139.008 80.583111c-11.093333 6.485333-16.327111 16.867556-16.497777 25.372444 0.085333 30.549333 27.249778 47.957333 50.403555 35.072 47.160889-26.197333 93.724444-53.475556 140.145778-80.924444 17.180444-10.154667 21.504-30.378667 11.832889-47.160889m91.875555 101.660444c-14.250667-4.067556-27.619556 1.422222-35.84 15.644445a24375.466667 24375.466667 0 0 0-77.312 134.485333c-10.012444 17.550222-5.859556 35.669333 9.784889 45.027556 16.014222 9.557333 34.247111 4.039111 44.714667-13.994667 25.543111-44.088889 50.915556-88.263111 76.373333-132.352 3.299556-5.745778 5.688889-11.690667 5.745778-14.933333 0-17.834667-9.272889-29.866667-23.466667-33.877334m147.456 44.288c-16.384 0.085333-27.306667 11.918222-27.448888 30.151111-0.142222 25.372444-0.028444 50.716444-0.028445 76.060445h-0.085333c0 26.112-0.113778 52.252444 0.056889 78.364444 0.113778 18.261333 11.064889 30.065778 27.448889 30.208 16.952889 0.142222 28.046222-11.832889 28.103111-30.748444 0.113778-51.086222 0.142222-102.172444 0.056889-153.258667 0-18.773333-11.207111-30.862222-28.103112-30.776889m177.208889-26.112c-7.509333-12.8-21.902222-16.014222-33.792-8.874666a23.722667 23.722667 0 0 0-8.533333 32.995555c26.282667 46.279111 52.906667 92.330667 79.644444 138.353778 4.494222 7.765333 11.633778 11.946667 20.906667 11.804444 18.545778-0.142222 30.520889-19.342222 21.219556-35.868444-26.026667-46.392889-52.650667-92.444444-79.473778-138.410667m239.957333-41.187555c-45.283556-26.254222-90.595556-52.48-135.964444-78.648889-4.693333-2.702222-9.728-4.323556-15.36-2.958222-9.102222 2.247111-14.933333 8.049778-16.497778 17.095111-1.877333 10.894222 3.84 18.204444 12.885333 23.438222 29.809778 17.180444 59.562667 34.417778 89.344 51.598222 15.217778 8.789333 30.236444 17.976889 45.738667 26.225778 14.677333 7.793778 31.061333-2.048 31.061333-18.033778-0.056889-8.448-4.096-14.592-11.207111-18.716444m48.867556-234.638222c-24.888889-0.085333-49.749333 0-74.609778 0v-0.085334c-25.258667 0-50.517333-0.056889-75.776 0.028445-13.425778 0.056889-20.963556 6.343111-21.162667 17.294222-0.199111 11.150222 7.082667 17.521778 20.679111 17.550222 50.488889 0.113778 100.977778 0.142222 151.495112 0.085333 13.368889 0 21.191111-6.485333 21.390222-17.152 0.227556-10.808889-8.106667-17.664-22.016-17.720888m-187.960889-127.146667c45.084444-26.026667 90.140444-52.110222 135.168-78.222222 4.864-2.844444 8.248889-6.855111 8.135111-12.942223-0.142222-11.036444-11.207111-17.436444-21.504-11.548444-45.511111 26.055111-90.851556 52.394667-136.135111 78.819556-7.68 4.494222-10.524444 11.52-5.575111 19.569777 4.835556 7.850667 12.088889 8.817778 19.911111 4.323556m-122.311111-115.114667c5.205333-0.256 8.220444-3.413333 10.609778-7.651555 4.920889-8.647111 10.040889-17.208889 14.990222-25.827556 20.48-35.555556 40.931556-71.025778 61.297778-106.609778 5.091556-8.874667 3.015111-16.668444-4.778667-18.517333-7.68-1.848889-10.894222 3.697778-14.051556 9.159111l-68.778666 119.495111c-2.844444 4.977778-6.030222 9.870222-8.305778 15.104-3.128889 7.196444 1.678222 14.648889 9.045333 14.848",
                    "p-id": "3454",
                    style: It({
                        fill: e.color
                    })
                }, null, 4)]))], 4))
            }
        });
    var si = Y(ri, [
        ["__scopeId", "data-v-0a8a31e2"]
    ]);
    const di = {},
        ui = {
            t: "1642063181211",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "5062",
            width: "128",
            height: "128",
            "data-v-cda444e0": ""
        },
        li = t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063",
            "data-v-cda444e0": ""
        }, null, -1),
        ci = [li];

    function pi(e, a) {
        return i(), r("svg", ui, ci)
    }
    var fi = Y(di, [
        ["render", pi]
    ]);
    const mi = {},
        bi = {
            width: "128",
            height: "128",
            viewBox: "0 0 50 50",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        vi = Mt('<g id="icon_internet-alert" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="wancheng"><path d="M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z" id="Path" fill-opacity="0.08" fill="#FAAD14" fill-rule="nonzero"></path><g id="Group-2" transform="translate(10.000000, 10.000000)"><path d="M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z" id="Path" fill="#FAAD14" fill-rule="nonzero"></path><path d="M15,6 C15.8284271,6 16.5,6.67157288 16.5,7.5 L16.5,18.5 C16.5,19.3284271 15.8284271,20 15,20 C14.1715729,20 13.5,19.3284271 13.5,18.5 L13.5,7.5 C13.5,6.67157288 14.1715729,6 15,6 Z" id="Path" fill="#FFFFFF"></path><path d="M15,25 C14.171875,25 13.5,24.328125 13.5,23.5 C13.5,22.671875 14.171875,22 15,22 C15.828125,22 16.5,22.671875 16.5,23.5 C16.5,24.328125 15.828125,25 15,25 Z" id="Path" fill="#FFFFFF"></path></g></g></g>', 1),
        gi = [vi];

    function _i(e, a) {
        return i(), r("svg", bi, gi)
    }
    var hi = Y(mi, [
        ["render", _i]
    ]);
    const xi = e => (O("data-v-7fc1a08c"), e = e(), N(), e),
        ki = ["href"],
        wi = xi(() => t("svg", {
            t: "1684144670421",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "4343"
        }, [t("path", {
            d: "M512 74.666667c241.066667 0 437.333333 196.266667 437.333333 437.333333S753.066667 949.333333 512 949.333333 74.666667 753.066667 74.666667 512 270.933333 74.666667 512 74.666667zM512 704c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666666 42.666667-19.2 42.666667-42.666666-19.2-42.666667-42.666667-42.666667z m0-458.666667c-76.8 0-138.666667 61.866667-138.666667 138.666667 0 17.066667 14.933333 32 32 32s32-14.933333 32-32c0-40.533333 34.133333-74.666667 74.666667-74.666667s74.666667 34.133333 74.666667 74.666667c0 2.133333 0 6.4-2.133334 10.666667-6.4 14.933333-19.2 32-40.533333 51.2-10.666667 10.666667-21.333333 19.2-34.133333 27.733333-2.133333 2.133333-6.4 4.266667-8.533334 6.4l-6.4 4.266667c-8.533333 6.4-14.933333 17.066667-14.933333 27.733333v108.8c2.133333 17.066667 14.933333 29.866667 32 29.866667h2.133333c17.066667-2.133333 29.866667-14.933333 29.866667-32v-89.6l12.8-10.666667c10.666667-8.533333 19.2-17.066667 29.866667-25.6 27.733333-25.6 46.933333-49.066667 57.6-74.666667 4.266667-10.666667 6.4-23.466667 6.4-34.133333 0-76.8-61.866667-138.666667-138.666667-138.666667z",
            fill: "#666666",
            "p-id": "4344"
        })], -1)),
        yi = [wi],
        Fi = [];
        //Fi = P({
            //props: {
                //type: null
            //},
            //setup(e) {
                //const a = e,
                    //o = R(() => {
                        //switch (a.type) {
                            //case "disk":
                                //return "https://www.linkease.com/rd/8myYAEVA/";
                            //case "store":
                                //return "https://www.linkease.com/rd/1F58VUTT/";
                            //case "docker":
                                //return "https://www.linkease.com/rd/2Q28MDtf/";
                            //case "download":
                                //return "https://www.linkease.com/rd/1tJo1KX-/";
                            //case "ddns":
                                //return "https://www.linkease.com/rd/3yFiX5-X/";
                            //case "network-interface":
                                //return "https://www.linkease.com/rd/3ca51a3G/"
                        //}
                    //});
                //return (n, s) => (i(), r("a", {
                    //href: w(o),
                    //target: "_blank",
                    //title: "\u8DF3\u8F6C\u6559\u7A0B"
                //}, yi, 8, ki))
            //}
       // });
    var Ei = Y(Fi, [
            ["__scopeId", "data-v-7fc1a08c"]
        ]),
        aa = {
            install: e => {
                e.component("icon-loading", si), e.component("icon-success", fi), e.component("icon-error", hi), e.component("GlHelp", Ei)
            }
        };
    const Ci = e => {},
        $i = () => new Date().getTime(),
        Di = e => {
            if (e < 1e3) return `${e} B`;
            let o = 1e3,
                n = 0;
            for (let p = e / 1e3; p >= 1e3; p /= 1e3) o *= 1e3, n++;
            let s = [" KB", " MB", " GB", " TB", " PB", " EB"];
            return (e / 100 / (o / 100)).toFixed(1) + s[n]
        },
        Bi = e => {
            if (e == null) return 0;
            if (e < 1e4) return e;
            let o = parseInt(`${e/1e4}`),
                n = e % 1e4;
            return `${o}\u4E07${n}`
        },
        Yi = e => {
            if (e) try {
                var a = new Date(e),
                    o = a.getHours(),
                    n = a.getMinutes(),
                    s = a.getSeconds();
                return o < 10 && (o = `0${o}`), n < 10 && (n = `0${n}`), s < 10 && (s = `0${s}`), `${o}:${n}:${s}`
            } catch (c) {}
            return ""
        },
        Ai = e => {
            if (e) {
                let a = Math.floor(e / 86400),
                    o = Math.floor(e / 3600) % 24,
                    n = Math.floor(e / 60) % 60,
                    s = e % 60;
                return a + " D, " + o + " H, " + (n < 10 ? "0" + n : n) + " M, " + (s < 10 ? "0" + s : s) + " S"
            }
        },
        Si = e => /^\d+\.\d+\.\d+\.\d+$/.test(e),
        zi = e => e.length < 3 ? "\u7528\u6237\u540D\u592A\u77ED" : e.toLowerCase() != e ? "\u7528\u6237\u540D\u53EA\u80FD\u4E3A\u5C0F\u5199" : new RegExp("^\\d").exec(e) ? "\u7528\u6237\u540D\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934" : new RegExp("^_").exec(e) ? "\u7528\u6237\u540D\u4E0D\u80FD\u4EE5_\u5F00\u5934" : new RegExp("^[a-z0-9_]+$").exec(e) ? !0 : "\u975E\u6CD5\u7684\u7528\u6237\u540D",
        Pi = (e, a) => {
            let o = !0,
                n = null;
            const s = () => {
                n = null, o && e().finally(() => {
                    o && (n = setTimeout(s, a))
                })
            };
            return n = setTimeout(s, 0), () => {
                o = !1, n != null && clearTimeout(n)
            }
        };
    var Ti = Object.freeze(Object.defineProperty({
            __proto__: null,
            formatDate: Ci,
            UnixDate: $i,
            byteToSize: Di,
            numberToSum: Bi,
            dateForm: Yi,
            stampForm: Ai,
            checkIsIP: Si,
            checkSmabaUserName: zi,
            easyInterval: Pi
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        yt = J({}, Ti);
    const Ii = {
            class: "flow"
        },
        Li = {
            class: "flow-data"
        },
        Mi = {
            key: 0
        },
        Oi = {
            key: 1
        },
        Ni = P({
            setup(e) {
                $a([Da, Ba, Ya, Aa, Sa, za]);
                const a = y(),
                    o = _ => {
                        var g;
                        const v = (g = a.value) == null ? void 0 : g[_];
                        return !v || v.startTime == 0 ? "" : d(v.startTime * 1e3) + "-" + d(v.endTime * 1e3)
                    },
                    n = R(() => {
                        var v;
                        let _ = [];
                        return (v = a.value) == null || v.forEach(g => {
                            _.push({
                                value: g.uploadSpeed
                            })
                        }), _
                    }),
                    s = R(() => {
                        var v;
                        let _ = [];
                        return (v = a.value) == null || v.forEach(g => {
                            _.push({
                                value: g.downloadSpeed
                            })
                        }), _
                    }),
                    c = R(() => {
                        var v;
                        let _ = "";
                        if (a.value) {
                            let g = ((v = a.value) == null ? void 0 : v.length) || 0;
                            if (g > 0) {
                                let k = a.value[g - 1];
                                _ = l(k.uploadSpeed) + "/s"
                            }
                        }
                        return _
                    }),
                    p = R(() => {
                        var v;
                        let _ = "";
                        if (a.value) {
                            let g = ((v = a.value) == null ? void 0 : v.length) || 0;
                            if (g > 0) {
                                let k = a.value[g - 1];
                                _ = l(k.downloadSpeed) + "/s"
                            }
                        }
                        return _
                    });
                R(() => {
                    var v;
                    let _ = [];
                    return (v = a.value) == null || v.forEach(g => {
                        _.push({
                            value: g.downloadSpeed + g.uploadSpeed
                        })
                    }), _
                });
                const f = () => T(this, null, function* () {
                        var _;
                        try {
                            const v = yield S.Network.Statistics.GET();
                            if (v.data && (_ = v.data.result) != null && _.items) {
                                const g = v.data.result.slots || 10;
                                if (v.data.result.items.length < g) {
                                    let k = v.data.result.items;
                                    for (; k.length < g;) k = [{
                                        downloadSpeed: 0,
                                        endTime: 0,
                                        startTime: 0,
                                        uploadSpeed: 0
                                    }].concat(k);
                                    a.value = k
                                } else v.data.result.items.length > g ? a.value = v.data.result.items.slice(g - v.data.result.items.length) : a.value = v.data.result.items
                            }
                        } catch (v) {
                            console.log(v)
                        }
                    }),
                    d = yt.dateForm,
                    l = yt.byteToSize,
                    u = y();
                let m = null;
                const b = _ => (m = Pa(_, "dark"), m.setOption({
                    animation: !1,
                    backgroundColor: "transparent",
                    color: ["transparent", "transparent"],
                    tooltip: {
                        trigger: "axis",
                        formatter: v => {
                            if (Array.isArray(v)) {
                                let g = "";
                                v.length > 0 && (g = o(v[0].axisValue));
                                for (let k = 0; k < v.length; k++) g = `${g}<br>${v[k].seriesName}: ${l(v[k].value)}/s`;
                                return g.toString()
                            } else {
                                const g = v;
                                return `${o(g.axisValue)}<br>${g.seriesName}: ${l(g.value)}/s`
                            }
                        }
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: !1,
                        splitLine: {
                            lineStyle: {
                                color: ["#999"]
                            },
                            show: !1
                        },
                        name: "",
                        show: !1,
                        nameGap: 0,
                        nameTextStyle: {
                            height: 0,
                            lineHeight: 0,
                            padding: 0
                        }
                    },
                    title: {
                        text: "Traffic",
                        textStyle: {
                            fontSize: 12,
                            color: "rgba(0, 0, 0, 0.6)"
                        },
                        top: "10px",
                        left: "10px"
                    },
                    yAxis: {
                        type: "value",
                        name: "",
                        minInterval: 1e4,
                        interval: 1e3,
                        axisLabel: {
                            formatter: function (v, g) {
                                return `${l(v)}/s`
                            },
                            color: "#fff",
                            show: !1
                        },
                        nameTextStyle: {
                            color: "#fff"
                        },
                        splitLine: {
                            lineStyle: {
                                color: ["#999"]
                            },
                            show: !1
                        }
                    },
                    series: [{
                        name: "Down",
                        data: s.value,
                        type: "line",
                        smooth: !0,
                        areaStyle: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: "rgba(32, 199, 247, 1)"
                                }, {
                                    offset: 1,
                                    color: "rgba(32, 199, 247, 0.1)"
                                }],
                                global: !1
                            }
                        }
                    }, {
                        name: "Up",
                        data: n.value,
                        type: "line",
                        smooth: !0,
                        areaStyle: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: "rgba(85, 58, 254, 1)"
                                }, {
                                    offset: 1,
                                    color: "rgba(85, 58, 254, 0.1)"
                                }],
                                global: !1
                            }
                        }
                    }],
                    legend: {
                        padding: 0,
                        align: "right",
                        top: "10px",
                        selected: {
                            Up: !0,
                            DOwn: !0
                        },
                        textStyle: {
                            color: "rgba(0, 0, 0, 0.6)"
                        },
                        itemStyle: {
                            color: "#5e72e4"
                        },
                        lineStyle: {
                            color: "#333"
                        }
                    },
                    grid: {
                        left: "2%",
                        right: "2%",
                        bottom: "0%",
                        top: "10%",
                        containLabel: !0
                    }
                }), m);
                return Ft(() => {
                    setTimeout(() => T(this, null, function* () {
                        if (u.value) {
                            yield f();
                            const _ = b(u.value),
                                v = u.value;
                            _.resize({
                                width: v.clientWidth,
                                height: v.clientHeight
                            }), window.addEventListener("resize", () => {
                                _.resize({
                                    width: v.clientWidth,
                                    height: v.clientHeight
                                })
                            });
                            const g = () => T(this, null, function* () {
                                m != null && (yield f(), m != null && (_.setOption({
                                    series: [{
                                        name: "Down",
                                        data: s.value,
                                        type: "line",
                                        areaStyle: {},
                                        smooth: !0
                                    }, {
                                        name: "Up",
                                        data: n.value,
                                        type: "line",
                                        areaStyle: {},
                                        smooth: !0
                                    }]
                                }), setTimeout(g, 5e3)))
                            });
                            setTimeout(g, 5e3)
                        }
                    }), 900)
                }), Gt(() => {
                    m != null && (m.dispose(), m = null)
                }), (_, v) => (i(), r("div", Ii, [t("div", {
                    ref_key: "el",
                    ref: u,
                    class: "echart"
                }, null, 512), t("div", Li, [w(c) ? (i(), r("span", Mi, "Up: " + h(w(c)), 1)) : C("", !0), w(p) ? (i(), r("span", Oi, "Down: " + h(w(p)), 1)) : C("", !0)])]))
            }
        });
    var qi = Y(Ni, [
        ["__scopeId", "data-v-e8f7c118"]
    ]);
    const Vi = {},
        Gi = {
            t: "1649668202191",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2338",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            width: "28px",
            height: "28px"
        },
        ji = t("path", {
            d: "M288 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",
            "p-id": "2339",
            fill: "#666"
        }, null, -1),
        Ri = t("path", {
            d: "M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",
            "p-id": "2340",
            fill: "#666"
        }, null, -1),
        Ui = t("path", {
            d: "M736 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",
            "p-id": "2341",
            fill: "#666"
        }, null, -1),
        Wi = [ji, Ri, Ui];

    function Hi(e, a) {
        return i(), r("svg", Gi, Wi)
    }
    var $t = Y(Vi, [
        ["render", Hi]
    ]);
    let se = 0;
    const Zi = {
            props: {
                type: String,
                message: String | Function,
                Close: Function,
                countdown: Number
            },
            data() {
                return {
                    show: !1,
                    remain: 0
                }
            },
            mounted() {
                if (window.setTimeout(() => {
                        this.show = !0
                    }, 0), this.countdown) {
                    this.remain = this.countdown;
                    const e = () => {
                        this.show && this.remain > 0 && (this.remain = this.remain - 1, se = window.setTimeout(e, 1e3))
                    };
                    se = window.setTimeout(e, 1e3)
                }
            },
            computed: {
                Message() {
                    return this.message + (this.countdown ? " " + this.remain + "s" : "")
                }
            },
            methods: {
                Stop() {
                    this.type != "loading" && (this.show = !1, se != 0 && clearTimeout(se), this.Close())
                }
            }
        },
        ce = e => (O("data-v-6935a479"), e = e(), N(), e),
        Ji = {
            key: 0,
            class: "loading icon"
        },
        Xi = ce(() => t("svg", {
            t: "1631799919469",
            class: "icon",
            viewBox: "0 0 1047 1047",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "3453",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M522.695111 1.991111c-26.339556 0.170667-47.416889 21.475556-47.672889 48.753778-0.284444 26.453333-0.056889 52.963556-0.056889 79.445333 0 27.249778-0.369778 54.528 0.113778 81.777778 0.483556 27.050667 22.016 47.132444 49.351111 46.904889a47.786667 47.786667 0 0 0 47.729778-47.445333c0.284444-53.76 0.284444-107.52-0.028444-161.251556-0.170667-27.676444-21.902222-48.355556-49.436445-48.184889m-195.896889 88.092445c-8.334222-14.222222-21.646222-21.276444-38.314666-21.333334-35.128889 0-56.576 36.949333-38.968889 68.152889a11616.995556 11616.995556 0 0 0 78.961777 137.614222 44.942222 44.942222 0 0 0 61.838223 16.896c21.304889-12.202667 29.667556-38.968889 17.379555-60.871111-26.453333-47.104-53.560889-93.866667-80.896-140.458666m-228.693333 234.524444c44.316444 25.799111 88.746667 51.342222 133.176889 76.970667 6.712889 3.896889 13.681778 6.912 21.703111 6.428444 20.138667 0.142222 35.953778-11.946667 41.301333-31.573333 5.006222-18.261333-2.673778-36.721778-20.224-46.990222-44.629333-26.026667-89.372444-51.882667-134.115555-77.710223-22.528-12.999111-47.815111-7.025778-59.818667 13.909334-12.231111 21.248-4.977778 45.624889 17.948444 58.965333m34.161778 235.975111c26.396444 0 52.821333 0.199111 79.217778-0.085333 23.409778-0.256 39.139556-16.412444 38.798222-39.139556-0.341333-21.617778-16.924444-37.347556-39.594666-37.376-51.655111-0.056889-103.310222-0.056889-154.965334 0.028445-24.177778 0.056889-40.704 15.985778-40.561778 38.684444 0.142222 22.186667 16.583111 37.745778 40.192 37.859556 25.656889 0.142222 51.285333 0.028444 76.913778 0m151.722667 100.238222a34.247111 34.247111 0 0 0-46.876445-12.942222 13764.778667 13764.778667 0 0 0-139.008 80.583111c-11.093333 6.485333-16.327111 16.867556-16.497777 25.372444 0.085333 30.549333 27.249778 47.957333 50.403555 35.072 47.160889-26.197333 93.724444-53.475556 140.145778-80.924444 17.180444-10.154667 21.504-30.378667 11.832889-47.160889m91.875555 101.660444c-14.250667-4.067556-27.619556 1.422222-35.84 15.644445a24375.466667 24375.466667 0 0 0-77.312 134.485333c-10.012444 17.550222-5.859556 35.669333 9.784889 45.027556 16.014222 9.557333 34.247111 4.039111 44.714667-13.994667 25.543111-44.088889 50.915556-88.263111 76.373333-132.352 3.299556-5.745778 5.688889-11.690667 5.745778-14.933333 0-17.834667-9.272889-29.866667-23.466667-33.877334m147.456 44.288c-16.384 0.085333-27.306667 11.918222-27.448888 30.151111-0.142222 25.372444-0.028444 50.716444-0.028445 76.060445h-0.085333c0 26.112-0.113778 52.252444 0.056889 78.364444 0.113778 18.261333 11.064889 30.065778 27.448889 30.208 16.952889 0.142222 28.046222-11.832889 28.103111-30.748444 0.113778-51.086222 0.142222-102.172444 0.056889-153.258667 0-18.773333-11.207111-30.862222-28.103112-30.776889m177.208889-26.112c-7.509333-12.8-21.902222-16.014222-33.792-8.874666a23.722667 23.722667 0 0 0-8.533333 32.995555c26.282667 46.279111 52.906667 92.330667 79.644444 138.353778 4.494222 7.765333 11.633778 11.946667 20.906667 11.804444 18.545778-0.142222 30.520889-19.342222 21.219556-35.868444-26.026667-46.392889-52.650667-92.444444-79.473778-138.410667m239.957333-41.187555c-45.283556-26.254222-90.595556-52.48-135.964444-78.648889-4.693333-2.702222-9.728-4.323556-15.36-2.958222-9.102222 2.247111-14.933333 8.049778-16.497778 17.095111-1.877333 10.894222 3.84 18.204444 12.885333 23.438222 29.809778 17.180444 59.562667 34.417778 89.344 51.598222 15.217778 8.789333 30.236444 17.976889 45.738667 26.225778 14.677333 7.793778 31.061333-2.048 31.061333-18.033778-0.056889-8.448-4.096-14.592-11.207111-18.716444m48.867556-234.638222c-24.888889-0.085333-49.749333 0-74.609778 0v-0.085334c-25.258667 0-50.517333-0.056889-75.776 0.028445-13.425778 0.056889-20.963556 6.343111-21.162667 17.294222-0.199111 11.150222 7.082667 17.521778 20.679111 17.550222 50.488889 0.113778 100.977778 0.142222 151.495112 0.085333 13.368889 0 21.191111-6.485333 21.390222-17.152 0.227556-10.808889-8.106667-17.664-22.016-17.720888m-187.960889-127.146667c45.084444-26.026667 90.140444-52.110222 135.168-78.222222 4.864-2.844444 8.248889-6.855111 8.135111-12.942223-0.142222-11.036444-11.207111-17.436444-21.504-11.548444-45.511111 26.055111-90.851556 52.394667-136.135111 78.819556-7.68 4.494222-10.524444 11.52-5.575111 19.569777 4.835556 7.850667 12.088889 8.817778 19.911111 4.323556m-122.311111-115.114667c5.205333-0.256 8.220444-3.413333 10.609778-7.651555 4.920889-8.647111 10.040889-17.208889 14.990222-25.827556 20.48-35.555556 40.931556-71.025778 61.297778-106.609778 5.091556-8.874667 3.015111-16.668444-4.778667-18.517333-7.68-1.848889-10.894222 3.697778-14.051556 9.159111l-68.778666 119.495111c-2.844444 4.977778-6.030222 9.870222-8.305778 15.104-3.128889 7.196444 1.678222 14.648889 9.045333 14.848",
            "p-id": "3454"
        })], -1)),
        Ki = [Xi],
        Qi = {
            key: 1,
            class: "success icon"
        },
        tr = ce(() => t("svg", {
            t: "1632451272305",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2204",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M1001.305115 275.874141 431.461709 845.718571c-28.221762 28.221762-73.977875 28.221762-102.20066 0L22.661116 539.116591c-28.222785-28.221762-28.222785-73.979922 0-102.20066 28.221762-28.221762 73.977875-28.221762 102.20066 0l255.500115 255.502162 518.743588-518.743588c28.221762-28.221762 73.977875-28.221762 102.199637 0C1029.5279 201.89422 1029.5279 247.65238 1001.305115 275.874141z",
            "p-id": "2205"
        })], -1)),
        er = [tr],
        ar = {
            key: 2,
            class: "error icon"
        },
        or = ce(() => t("svg", {
            t: "1632451325789",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2204",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M823.04 840.32 524.16 540.16l296.32-294.4c12.8-12.8 12.8-33.28 0-45.44-12.8-12.8-33.28-12.8-46.08 0L478.08 494.08 184.96 200.32c-12.8-12.8-33.28-12.8-45.44 0s-12.8 33.28 0 45.44l292.48 293.76-302.72 300.8c-12.8 12.8-12.8 33.28 0 45.44 12.8 12.8 33.28 12.8 46.08 0l302.72-300.16 299.52 300.16c12.8 12.8 33.28 12.8 45.44 0C835.2 873.6 835.2 853.12 823.04 840.32z",
            "p-id": "2205"
        })], -1)),
        nr = [or],
        ir = {
            key: 3,
            class: "warning icon"
        },
        rr = ce(() => t("svg", {
            t: "1632451401172",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "1638",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M512 1021.45211835a60.32985613 60.32985613 0 1 1 60.32985613-60.32985611 60.32985613 60.32985613 0 0 1-60.32985613 60.32985611z m86.85823451-924.97400238L572.32985613 719.80283775a60.32985613 60.32985613 0 0 1-120.65971226 0l-26.52837838-623.32472178c-0.16758294-2.22885301-0.28489098-4.49122263-0.284891-6.78710881a87.14312551 87.14312551 0 0 1 174.28625102 0c0 2.2958862-0.11730806 4.5582558-0.284891 6.78710881z",
            "p-id": "1639"
        })], -1)),
        sr = [rr];

    function dr(e, a, o, n, s, c) {
        return i(), M(kt, {
            name: "el-fade-in-linear"
        }, {
            default: V(() => [s.show ? (i(), r("div", {
                key: 0,
                class: "toast",
                onClick: a[1] || (a[1] = p => c.Stop())
            }, [o.type == "loading" ? (i(), r("div", Ji, Ki)) : o.type == "success" ? (i(), r("div", Qi, er)) : o.type == "error" ? (i(), r("div", ar, nr)) : o.type == "warning" ? (i(), r("div", ir, sr)) : C("", !0), t("div", {
                class: "message",
                onClick: a[0] || (a[0] = nt(() => {}, ["stop"]))
            }, h(c.Message), 1)])) : C("", !0)]),
            _: 1
        })
    }
    var ur = Y(Zi, [
        ["render", dr],
        ["__scopeId", "data-v-6935a479"]
    ]);
    const Xt = new Map,
        jt = e => {
            const a = tt(ur, at(J({}, e), {
                    Close: () => {
                        n()
                    }
                })),
                o = document.createElement("div");
            document.body.append(o), a.mount(o);
            const n = () => {
                o.remove(), Xt.get(a._uid) && Xt.delete(a._uid)
            };
            return e.type == "loading" && Xt.set(a._uid, {
                Close: n
            }), (e == null ? void 0 : e.duration) == 0 || ((e == null ? void 0 : e.duration) > 0 ? setTimeout(() => {
                n()
            }, e == null ? void 0 : e.duration) : setTimeout(() => {
                n()
            }, 3e3)), {
                Close: n
            }
        },
        F = e => jt(e);
    F.Loading = (e, a) => jt({
        type: "loading",
        message: e || "Loading...",
        duration: 0,
        countdown: a || 0
    });
    F.Success = e => jt({
        type: "success",
        message: e
    });
    F.Error = e => jt({
        type: "error",
        message: e,
        duration: 0
    });
    F.Warning = e => jt({
        type: "warning",
        message: e
    });
    F.Message = e => jt({
        message: e
    });
    F.Clear = () => {
        Xt.forEach((e, a) => {
            e.Close(), Xt.delete(a)
        })
    };
    const ct = {
            installApp: (e, a) => new Promise((o, n) => {
                let s = 0;
                S.App.Install.POST({
                    name: e
                }).then(() => {
                    const c = setTimeout(() => {
                            s == 0 && (s = 1, o(!1))
                        }, (a || 60) * 1e3),
                        p = () => {
                            s == 0 && S.App.Check.POST({
                                name: e
                            }).then(f => {
                                if (s == 0 && f != null && f.data) {
                                    const {
                                        result: d
                                    } = f.data;
                                    if ((d == null ? void 0 : d.status) == "installed") {
                                        clearTimeout(c), s = 1, o(!0);
                                        return
                                    }
                                }
                            }).catch(f => {}).finally(() => {
                                s == 0 && setTimeout(p, 3e3)
                            })
                        };
                    setTimeout(p, 3e3)
                }).catch(c => {
                    s == 0 && (s = 1, n("Installation failed" + c))
                })
            }),
            checkAndInstallApp: (e, a, o) => T(Kt, null, function* () {
                let n = F.Loading("Scanning...");
                try {
                    const s = yield S.App.Check.POST({
                        name: e
                    });
                    if (n.Close(), s != null && s.data) {
                        const {
                            result: c,
                            error: p
                        } = s.data;
                        if (p) F.Warning(p);
                        else if (c) {
                            if (c.status == "installed") return !0;
                            if (confirm(`It has been detected that you have not installed ${a} plug-in, do you want to install it?`)) {
                                n = F.Loading("Installing...");
                                const f = yield ct.installApp(o || e);
                                if (n.Close(), f) return !0;
                                F.Error("Installation failed or timed out, please check the software sources or try again later")
                            }
                        } else F.Warning("Checking plugin status failed")
                    }
                    return !1
                } catch (s) {
                    return n.Close(), F.Warning(s), !1
                }
            }),
            installAndGo: (e, a, o, n) => T(Kt, null, function* () {
                (yield ct.checkAndInstallApp(e, a, n)) && (location.href = o)
            })
        },
        lr = {},
        cr = {
            t: "1640746738262",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "1216",
            width: "128",
            height: "128"
        },
        pr = t("path", {
            d: "M511.232 438.8352L112.9984 40.6016A51.2 51.2 0 0 0 40.6016 112.9984L438.784 511.232 40.6016 909.4656a51.2 51.2 0 1 0 72.3968 72.448l398.2336-398.2848 398.2336 398.2848a51.2 51.2 0 1 0 72.448-72.448l-398.2848-398.2336 398.2848-398.2336A51.2 51.2 0 0 0 909.4656 40.6016L511.232 438.784z",
            "p-id": "1217"
        }, null, -1),
        fr = [pr];

    function mr(e, a) {
        return i(), r("svg", cr, fr)
    }
    var br = Y(lr, [
        ["render", mr]
    ]);
    const vr = e => (O("data-v-428d873e"), e = e(), N(), e),
        gr = {
            id: "actioner"
        },
        _r = {
            key: 0,
            class: "action-container"
        },
        hr = {
            class: "action-container_header"
        },
        xr = vr(() => t("div", null, null, -1)),
        kr = {
            class: "title"
        },
        wr = {
            class: "action-container_body"
        },
        yr = P({
            props: {
                Close: {
                    type: Function
                },
                type: {
                    type: Number
                },
                title: String
            },
            setup(e) {
                const a = e,
                    o = y(!1);
                Ft(() => {
                    o.value = !0, document.body.setAttribute("lock-scroll", "true")
                }), Gt(() => {
                    document.body.removeAttribute("lock-scroll")
                });
                const n = () => {
                    a.Close && (o.value = !1, setTimeout(() => {
                        a.Close && a.Close()
                    }, 300))
                };
                return (s, c) => (i(), r("div", gr, [t("div", {
                    class: "bg",
                    onClick: n
                }), e.type != null ? Dt(s.$slots, "default", {
                    key: 0
                }, void 0, !0) : (i(), r(L, {
                    key: 1
                }, [o.value ? (i(), r("div", _r, [t("div", hr, [xr, t("div", kr, h(e.title), 1), t("button", {
                    class: "close",
                    title: "Close",
                    onClick: n
                }, [D(br)])]), t("div", wr, [Dt(s.$slots, "default", {}, void 0, !0)])])) : C("", !0)], 64))]))
            }
        });
    var Fr = Y(yr, [
        ["__scopeId", "data-v-428d873e"]
    ]);
    const et = P({
            props: {
                Close: {
                    type: Function
                },
                type: {
                    type: Number
                },
                title: String
            },
            setup(e) {
                return (a, o) => (i(), M(Fr, {
                    Close: e.Close,
                    type: e.type,
                    title: e.title
                }, {
                    default: V(() => [Dt(a.$slots, "default")]),
                    _: 3
                }, 8, ["Close", "type", "title"]))
            }
        }),
        Bt = e => (O("data-v-c4cdcce6"), e = e(), N(), e),
        Er = ["onSubmit"],
        Cr = Bt(() => t("div", {
            class: "actioner-dns_header"
        }, [t("span", null, "DNS Configuration")], -1)),
        $r = {
            class: "actioner-dns_body"
        },
        Dr = {
            class: "label-item"
        },
        Br = Bt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "DNS Options")], -1)),
        Yr = {
            class: "label-item_value"
        },
        Ar = ["disabled"],
        Sr = Bt(() => t("option", {
            value: "manual"
        }, "Custom DNS", -1)),
        zr = {
            class: "label-item"
        },
        Pr = Bt(() => t("div", {
            class: "label-item_key"
        }, "DNS Server address", -1)),
        Tr = {
            class: "label-item_value"
        },
        Ir = ["onUpdate:modelValue"],
        Lr = {
            class: "label-item"
        },
        Mr = Bt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "DNS Server address")], -1)),
        Or = {
            class: "label-item_value"
        },
        Nr = {
            class: "label-item"
        },
        qr = Bt(() => t("div", {
            class: "label-item_key"
        }, "Alternate DNS Server address", -1)),
        Vr = {
            class: "label-item_value"
        },
        Gr = {
            key: 1,
            class: "label-message"
        },
        jr = {
            class: "actioner-dns_footer"
        },
        Rr = ["disabled"],
        Ur = {
            key: 1,
            class: "actioner-dns"
        },
        Wr = Bt(() => t("div", {
            class: "actioner-dns_header"
        }, [t("span", null, "DNS Configuration")], -1)),
        Hr = Bt(() => t("div", {
            class: "actioner-dns_body"
        }, [t("div", {
            class: "config-message"
        }, "DNS Configuration saved")], -1)),
        Zr = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(0),
                    n = le(),
                    s = n.status,
                    c = R(() => n.status.proto != "static"),
                    p = y({
                        interfaceName: s.defaultInterface || "",
                        dnsProto: s.dnsProto || "manual",
                        manualDnsIp: s.dnsList || []
                    }),
                    f = y(""),
                    d = y(""),
                    l = y(""),
                    u = y(!1),
                    m = () => T(this, null, function* () {
                        l.value = "";
                        let v = {};
                        switch (p.value.dnsProto) {
                            case "auto":
                                break;
                            case "manual":
                                v.manualDnsIp = [], p.value.manualDnsIp != null && p.value.manualDnsIp.length > 0 ? v.manualDnsIp = p.value.manualDnsIp : (v.manualDnsIp.push(f.value), d.value && v.manualDnsIp.push(d.value));
                                break
                        }
                        v.dnsProto = p.value.dnsProto, v.interfaceName = p.value.interfaceName;
                        const g = F.Loading("Configuration...");
                        try {
                            const k = yield S.Guide.DnsConfig.POST(v);
                            if (k != null && k.data) {
                                const {
                                    success: x,
                                    error: E
                                } = k == null ? void 0 : k.data;
                                E && (l.value = E), (x == null || x == 0) && (F.Success("Configuration successfully"), o.value = 1)
                            }
                        } catch (k) {
                            l.value = k
                        }
                        g.Close()
                    }),
                    b = v => {
                        v.preventDefault(), a.Close && a.Close()
                    },
                    _ = v => {
                        location.reload()
                    };
                return (v, g) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => [o.value == 0 ? (i(), r("form", {
                        key: 0,
                        class: "actioner-dns",
                        onSubmit: nt(m, ["prevent"])
                    }, [Cr, t("div", $r, [t("div", Dr, [Br, t("div", Yr, [z(t("select", {
                        "onUpdate:modelValue": g[0] || (g[0] = k => p.value.dnsProto = k)
                    }, [t("option", {
                        value: "auto",
                        disabled: !w(c)
                    }, "DNS Automatically", 8, Ar), Sr], 512), [
                        [Q, p.value.dnsProto]
                    ])])]), p.value.dnsProto == "manual" ? (i(), r(L, {
                        key: 0
                    }, [p.value.manualDnsIp != null && p.value.manualDnsIp.length > 0 ? (i(!0), r(L, {
                        key: 0
                    }, j(p.value.manualDnsIp, (k, x) => (i(), r("div", zr, [Pr, t("div", Tr, [z(t("input", {
                        type: "text",
                        placeholder: "Please enter DNS Address",
                        "onUpdate:modelValue": E => p.value.manualDnsIp[x] = E
                    }, null, 8, Ir), [
                        [W, p.value.manualDnsIp[x], void 0, {
                            trim: !0
                        }]
                    ])])]))), 256)) : (i(), r(L, {
                        key: 1
                    }, [t("div", Lr, [Mr, t("div", Or, [z(t("input", {
                        type: "text",
                        placeholder: "Please enter DNS Address",
                        required: "",
                        "onUpdate:modelValue": g[1] || (g[1] = k => f.value = k)
                    }, null, 512), [
                        [W, f.value, void 0, {
                            trim: !0
                        }]
                    ])])]), t("div", Nr, [qr, t("div", Vr, [z(t("input", {
                        type: "text",
                        placeholder: "Alternate DNS Address",
                        "onUpdate:modelValue": g[2] || (g[2] = k => d.value = k)
                    }, null, 512), [
                        [W, d.value, void 0, {
                            trim: !0
                        }]
                    ])])])], 64))], 64)) : C("", !0), l.value ? (i(), r("div", Gr, h(l.value), 1)) : C("", !0)]), t("div", jr, [t("button", {
                        class: "cbi-button cbi-button-apply app-btn",
                        disabled: u.value
                    }, "Save & Apply", 8, Rr), t("button", {
                        class: "cbi-button cbi-button-remove app-btn app-back",
                        onClick: b
                    }, "Cancel")])], 40, Er)) : o.value == 1 ? (i(), r("div", Ur, [Wr, Hr, t("div", {
                        class: "actioner-dns_footer"
                    }, [t("button", {
                        class: "cbi-button cbi-button-remove app-btn app-back",
                        onClick: _
                    }, "Exit")])])) : C("", !0)]),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var Jr = Y(Zr, [
        ["__scopeId", "data-v-c4cdcce6"]
    ]);
    const oa = () => {
            const e = document.createElement("div");
            document.body.appendChild(e);
            const a = tt(Jr, {
                Close: () => {
                    o()
                }
            });
            a.mount(e);
            const o = () => {
                a.unmount(), e.remove()
            };
            return {
                Close: o
            }
        },
        pe = e => (O("data-v-0ae97e7e"), e = e(), N(), e),
        Xr = {
            class: "action"
        },
        Kr = {
            class: "action-body"
        },
        Qr = pe(() => t("div", {
            class: "icon"
        }, [t("svg", {
            t: "1642063181211",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "5062",
            width: "128",
            height: "128",
            "data-v-cda444e0": ""
        }, [t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063",
            "data-v-cda444e0": ""
        })])], -1)),
        ts = pe(() => t("h2", {
            class: "title"
        }, "\u670D\u52A1\u5DF2\u542F\u52A8", -1)),
        es = {
            class: "info"
        },
        as = pe(() => t("span", null, "\u524D\u5F80", -1)),
        os = ["href"],
        ns = pe(() => t("span", null, "\u8FDB\u884C\u6D4B\u901F", -1)),
        is = P({
            props: {
                port: Number,
                Close: Function
            },
            setup(e) {
                const a = e,
                    o = R(() => `http://${location.hostname}:${a.port}`),
                    n = () => {
                        a.Close && (a.Close(), location.reload())
                    };
                return (s, c) => (i(), M(et, {
                    type: 1
                }, {
                    default: V(() => [D(kt, {
                        name: "rotate",
                        mode: "out-in"
                    }, {
                        default: V(() => [t("div", Xr, [t("div", Kr, [Qr, ts, t("div", es, [as, t("a", {
                            href: w(o),
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, h(w(o)), 9, os), ns]), t("div", {
                            class: "btns"
                        }, [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            type: "button",
                            onClick: n
                        }, "\u5173\u95ED")])])])]),
                        _: 1
                    })]),
                    _: 1
                }))
            }
        });
    var rs = Y(is, [
            ["__scopeId", "data-v-0ae97e7e"]
        ]),
        ss = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(rs, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        };
    const $e = e => (O("data-v-39248365"), e = e(), N(), e),
        ds = $e(() => t("div", {
            class: "app-container_status-label_iconer"
        }, [t("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "xmlns:v": "https://vecta.io/nano",
            width: "48",
            height: "38",
            viewBox: "0 0 12.7 10.05"
        }, [t("defs", null, [t("filter", {
            id: "A",
            "color-interpolation-filters": "sRGB"
        }, [t("feColorMatrix", {
            result: "A",
            values: "2 -0.5 -0.5 0 0 -0.5 2 -0.5 0 0 -0.5 -0.5 2 0 0 0 0 0 1 0 "
        }), t("feColorMatrix", {
            values: "0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
        }), t("feColorMatrix", {
            in: "A",
            values: "2 -0.5 -0.5 0 0 -0.5 2 -0.5 0 0 -0.5 -0.5 2 0 0 0 0 0 1 0 "
        })]), t("path", {
            id: "B",
            d: "M80.56 75.75h3.91v22.79h-3.91z"
        })]), t("g", {
            transform: "translate(0 -286.95)"
        }, [t("rect", {
            x: ".21",
            y: "287.25",
            width: "12.33",
            height: "9.5",
            ry: ".57",
            fill: "#e6e6e6",
            stroke: "#e6e6e6",
            "stroke-linejoin": "round",
            "stroke-width": ".37",
            "paint-order": "normal"
        }), t("path", {
            transform: "matrix(.105 0 0 .0989 -6.0834 280.6)",
            d: "M73.96 75.66h89.41c2.31 0 4.17 1.86 4.17 4.17v52.65h-21.74v9.41h-8.69v12.59h-36.87v-12.59h-8.69v-9.41H69.79V79.83c0-2.31 1.86-4.17 4.17-4.17z",
            fill: "#999",
            filter: "url(#A)",
            stroke: "#999",
            "stroke-width": "2.5"
        }), t("g", {
            transform: "matrix(.1048 0 0 .1048 -6.0999 280.7)",
            fill: "#fff",
            filter: "url(#A)",
            stroke: "#fff"
        }, [t("use", {
            "xlink:href": "#B"
        }), t("use", {
            "xlink:href": "#B",
            x: "73.04"
        }), t("use", {
            "xlink:href": "#B",
            x: "52.17"
        }), t("use", {
            "xlink:href": "#B",
            x: "41.74"
        }), t("use", {
            "xlink:href": "#B",
            x: "31.3"
        }), t("use", {
            "xlink:href": "#B",
            x: "20.87"
        }), t("use", {
            "xlink:href": "#B",
            x: "10.43"
        }), t("use", {
            "xlink:href": "#B",
            x: "62.61"
        })]), t("rect", {
            x: "1.24",
            y: "294.55",
            width: "1.6",
            height: "1.38",
            ry: ".11",
            fill: "#ccc",
            stroke: "#ccc",
            "stroke-width": ".22",
            "paint-order": "normal"
        })])])], -1)),
        us = {
            class: "app-container_status-label_text"
        },
        ls = $e(() => t("div", {
            class: "text_status"
        }, "\u5DF2\u65AD\u5F00", -1)),
        cs = {
            class: "text_info"
        },
        ps = $e(() => t("div", {
            class: "app-container_status-label_iconer"
        }, [t("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            width: "48",
            height: "38",
            viewBox: "0 0 12.7 10.05",
            "xmlns:v": "https://vecta.io/nano"
        }, [t("defs", null, [t("filter", {
            id: "A",
            "color-interpolation-filters": "sRGB"
        }, [t("feColorMatrix", {
            result: "A",
            values: "2 -0.5 -0.5 0 0 -0.5 2 -0.5 0 0 -0.5 -0.5 2 0 0 0 0 0 1 0 "
        }), t("feColorMatrix", {
            values: "0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
        }), t("feColorMatrix", {
            in: "A",
            values: "2 -0.5 -0.5 0 0 -0.5 2 -0.5 0 0 -0.5 -0.5 2 0 0 0 0 0 1 0 "
        })]), t("path", {
            id: "B",
            d: "M80.56 75.75h3.91v22.79h-3.91z"
        })]), t("g", {
            transform: "translate(-.03 -287.07)"
        }, [t("rect", {
            x: ".24",
            y: "287.36",
            width: "12.33",
            height: "9.5",
            ry: ".57",
            fill: "#e6e6e6",
            stroke: "#e6e6e6",
            "stroke-linejoin": "round",
            "stroke-width": ".37",
            "paint-order": "normal"
        }), t("path", {
            transform: "matrix(.105 0 0 .0989 -6.0532 280.72)",
            d: "M73.96 75.66h89.41c2.31 0 4.17 1.86 4.17 4.17v52.65h-21.74v9.41h-8.69v12.59h-36.87v-12.59h-8.69v-9.41H69.79V79.83c0-2.31 1.86-4.17 4.17-4.17z",
            fill: "#4d4d4d",
            filter: "url(#A)",
            stroke: "#4d4d4d",
            "stroke-width": "2.5"
        }), t("g", {
            transform: "matrix(.1048 0 0 .1048 -6.0697 280.81)",
            fill: "#fff",
            filter: "url(#A)",
            stroke: "#fff"
        }, [t("use", {
            "xlink:href": "#B"
        }), t("use", {
            "xlink:href": "#B",
            x: "73.04"
        }), t("use", {
            "xlink:href": "#B",
            x: "52.17"
        }), t("use", {
            "xlink:href": "#B",
            x: "41.74"
        }), t("use", {
            "xlink:href": "#B",
            x: "31.3"
        }), t("use", {
            "xlink:href": "#B",
            x: "20.87"
        }), t("use", {
            "xlink:href": "#B",
            x: "10.43"
        }), t("use", {
            "xlink:href": "#B",
            x: "62.61"
        })]), t("rect", {
            x: "1.27",
            y: "294.67",
            width: "1.6",
            height: "1.38",
            ry: ".11",
            fill: "#55d400",
            stroke: "#55d400",
            "stroke-width": ".22",
            "paint-order": "normal"
        })])])], -1)),
        fs = {
            class: "app-container_status-label_text"
        },
        ms = {
            class: "text_info"
        },
        bs = P({
            props: {
                item: {
                    type: Object,
                    required: !0
                },
                transform: {
                    type: Number,
                    default: 0
                }
            },
            setup(e) {
                const a = e,
                    o = Ke(),
                    n = y(null),
                    s = p => {
                        const f = p.target,
                            {
                                left: d,
                                top: l
                            } = f.getBoundingClientRect();
                        o.portitemStyle.show = !0, o.portitemStyle.left = d, o.portitemStyle.top = l, o.portitemStyle.portitem = a.item
                    },
                    c = p => {
                        o.portitemStyle.show = !1
                    };
                return (p, f) => (i(), r("div", {
                    class: "app-container_status-label_bg",
                    style: It(`transform: translateX(${e.transform}px);`),
                    ref_key: "el",
                    ref: n,
                    onMouseenter: s,
                    onMouseleave: c
                }, [e.item.linkState == "DOWN" ? (i(), r(L, {
                    key: 0
                }, [ds, t("div", us, [ls, t("div", cs, h(e.item.name) + " " + h(e.item.interfaceNames ? `(${e.item.interfaceNames.join(",").toLocaleUpperCase()})` : ""), 1)])], 64)) : (i(), r(L, {
                    key: 1
                }, [ps, t("div", fs, [t("div", null, h(e.item.linkSpeed), 1), t("div", ms, h(e.item.name) + " " + h(e.item.interfaceNames ? `(${e.item.interfaceNames.join(",").toLocaleUpperCase()})` : ""), 1)])], 64))], 36))
            }
        });
    var na = Y(bs, [
        ["__scopeId", "data-v-39248365"]
    ]);
    const ia = e => (O("data-v-3470ca08"), e = e(), N(), e),
        vs = ia(() => t("span", null, h("<"), -1)),
        gs = [vs],
        _s = ia(() => t("span", null, h(">"), -1)),
        hs = [_s],
        xs = P({
            props: {
                portList: {
                    type: Array,
                    required: !0
                }
            },
            setup(e) {
                const a = y(),
                    o = y(0),
                    n = y(0),
                    s = y(0),
                    c = y(!1),
                    p = () => {
                        if (s.value >= 0) {
                            s.value = 0;
                            return
                        }
                        s.value += 100
                    },
                    f = () => {
                        if (s.value <= 0 - o.value + n.value) {
                            s.value = 0 - o.value + n.value;
                            return
                        }
                        s.value -= 100
                    };
                return Ft(() => {
                    Ta(() => {
                        a.value && (o.value = a.value.scrollWidth, n.value = a.value.clientWidth, c.value = o.value > n.value)
                    })
                }), (d, l) => (i(), r("div", {
                    class: "app-interfaces",
                    ref_key: "el",
                    ref: a
                }, [c.value ? (i(), r(L, {
                    key: 0
                }, [t("a", {
                    class: "btn-f",
                    onClick: p
                }, gs), t("a", {
                    class: "btn-r",
                    onClick: f
                }, hs)], 64)) : C("", !0), (i(!0), r(L, null, j(e.portList, (u, m) => (i(), M(na, {
                    item: u,
                    transform: s.value
                }, null, 8, ["item", "transform"]))), 256))], 512))
            }
        });
    var ks = Y(xs, [
        ["__scopeId", "data-v-3470ca08"]
    ]);
    const ws = {},
        ys = {
            width: "82px",
            height: "82px",
            viewBox: "0 0 82 82",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        Fs = Mt('<title>icon_finished</title><g id="icon_finished" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="circle" transform="translate(2.000000, 2.000000)"><circle id="Oval" stroke="#553AFE" stroke-width="4" cx="39" cy="39" r="39"></circle><circle id="Oval" fill="#553AFE" cx="39.028463" cy="39.028463" r="35.028463"></circle><path d="M41.0148619,52.8014169 C39.924327,53.7754409 39.8138203,55.4674462 40.7680384,56.5806164 C41.7222564,57.6937867 43.3798562,57.8065871 44.4703911,56.8325631 L54.9654709,47.4587599 C56.1301083,46.4185505 56.1643255,44.5807064 55.0392485,43.4960788 L31.4253189,20.7311283 C30.3718273,19.7155123 28.7112257,19.7639428 27.7162614,20.8393009 C26.7212971,21.914659 26.7687429,23.6097284 27.8222345,24.6253444 L49.3379698,45.3675358 L41.0148619,52.8014169 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero" transform="translate(41.430740, 38.747628) rotate(-270.000000) translate(-41.430740, -38.747628) "></path></g></g>', 2),
        Es = [Fs];

    function Cs(e, a) {
        return i(), r("svg", ys, Es)
    }
    var De = Y(ws, [
        ["render", Cs]
    ]);
    const Rt = e => (O("data-v-1e29113c"), e = e(), N(), e),
        $s = ["onSubmit"],
        Ds = Rt(() => t("div", {
            class: "actioner-dns_header"
        }, [t("span", null, "Software Source Configuration")], -1)),
        Bs = {
            class: "actioner-dns_body"
        },
        Ys = {
            class: "label-item"
        },
        As = Rt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "Current software source")], -1)),
        Ss = {
            class: "label-item_value"
        },
        zs = {
            class: "item_info"
        },
        Ps = {
            class: "label-item"
        },
        Ts = Rt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "Change software source")], -1)),
        Is = {
            class: "label-item_value"
        },
        Ls = Rt(() => t("option", {
            selected: "true",
            value: ""
        }, "Please select a software source", -1)),
        Ms = ["value"],
        Os = {
            class: "actioner-dns_footer"
        },
        Ns = ["disabled"],
        qs = {
            key: 1,
            class: "actioner-dns"
        },
        Vs = Rt(() => t("div", {
            class: "actioner-dns_header"
        }, [t("span", {
            class: "softsource_tit"
        }, "Software Source Configuration")], -1)),
        Gs = {
            class: "actioner-dns_body"
        },
        js = {
            class: "finished"
        },
        Rs = Rt(() => t("p", {
            class: "successed"
        }, "Configuration successfully", -1)),
        Us = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(0),
                    n = y(""),
                    s = y(),
                    c = y();
                (() => {
                    S.Guide.SoftSourceList.GET().then(u => {
                        var m, b;
                        if ((m = u == null ? void 0 : u.data) != null && m.result) {
                            const _ = (b = u == null ? void 0 : u.data) == null ? void 0 : b.result;
                            c.value = _
                        }
                    }).then(() => S.Guide.GetSoftSource.GET()).then(u => {
                        var m, b;
                        if ((m = u == null ? void 0 : u.data) != null && m.result) {
                            const _ = u.data.result;
                            s.value = _.softSource, (b = c.value) != null && b.softSourceList.find(v => v.identity == _.softSource.identity) && (n.value = _.softSource.identity)
                        }
                    })
                })();
                const f = u => {
                        u.preventDefault(), a.Close && a.Close()
                    },
                    d = u => {
                        const m = F.Loading("Configuring...");
                        S.Guide.SoftSource.POST({
                            softSourceIdentity: n.value
                        }).then(b => {
                            if (b != null && b.data) {
                                if ((b.data.success || 0) == 0) {
                                    o.value = 1;
                                    return
                                } else if (b.data.error) throw b.data.error
                            }
                            throw "Unknown mistake"
                        }).catch(b => {
                            F.Error(b)
                        }).finally(() => m.Close())
                    },
                    l = u => {
                        u.preventDefault(), location.reload()
                    };
                return (u, m) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => {
                        var b, _;
                        return [o.value == 0 ? (i(), r("form", {
                            key: 0,
                            class: "actioner-dns",
                            onSubmit: nt(d, ["prevent"])
                        }, [Ds, t("div", Bs, [t("div", Ys, [As, t("div", Ss, [t("p", zs, h((b = s.value) == null ? void 0 : b.name), 1)])]), t("div", Ps, [Ts, t("div", Is, [z(t("select", {
                            name: "",
                            id: "",
                            "onUpdate:modelValue": m[0] || (m[0] = v => n.value = v)
                        }, [Ls, (i(!0), r(L, null, j((_ = c.value) == null ? void 0 : _.softSourceList, (v, g) => (i(), r("option", {
                            value: v.identity,
                            key: g
                        }, h(v.name), 9, Ms))), 128))], 512), [
                            [Q, n.value, void 0, {
                                trim: !0
                            }]
                        ])])])]), t("div", Os, [t("button", {
                            class: "cbi-button cbi-button-apply app-btn",
                            disabled: n.value == ""
                        }, "Save & Apply", 8, Ns), t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: f
                        }, "Cancel")])], 40, $s)) : C("", !0), o.value == 1 ? (i(), r("form", qs, [Vs, t("div", Gs, [t("div", js, [D(De)]), Rs, t("div", {
                            class: "btns"
                        }, [t("button", {
                            class: "cbi-button cbi-button-apply softsource_successed",
                            onClick: l
                        }, "Exit")])])])) : C("", !0)]
                    }),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var Ws = Y(Us, [
        ["__scopeId", "data-v-1e29113c"]
    ]);
    const ra = () => {
            const e = document.createElement("div");
            document.body.appendChild(e);
            const a = tt(Ws, {
                Close: () => {
                    o()
                }
            });
            a.mount(e);
            const o = () => {
                a.unmount(), e.remove()
            };
            return {
                Close: o
            }
        },
        ut = e => (O("data-v-fd7a24a6"), e = e(), N(), e),
        Hs = {
            class: "app-container_status-label"
        },
        Zs = {
            class: "app-container_status-label_item",
            style: {
                "padding-right": "10px"
            }
        },
        Js = {
            class: "app-container_status-container",
            style: {
                height: "100%"
            }
        },
        Xs = {
            key: 0,
            class: "app-container_status-container_body"
        },
        Ks = ut(() => t("svg", {
            width: "50px",
            height: "50px",
            viewBox: "0 0 50 50",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, [t("title", null, "icon_internet connected"), t("g", {
            id: "icon_internet-connected",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "wancheng",
            "fill-rule": "nonzero"
        }, [t("path", {
            d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
            id: "Path",
            "fill-opacity": "0.0779329313",
            fill: "#553AFE"
        }), t("g", {
            id: "Group-2",
            transform: "translate(10.000000, 10.000000)"
        }, [t("path", {
            d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
            id: "Path",
            fill: "#553AFE"
        }), t("path", {
            d: "M8,15 L13.2546984,20.2546984 C13.6452227,20.6452227 14.2783876,20.6452227 14.6689119,20.2546984 C14.6813066,20.2423037 14.6933732,20.2295853 14.7050993,20.2165563 L23,11 L23,11",
            id: "Path-3",
            stroke: "#FFFFFF",
            "stroke-width": "2",
            "stroke-linecap": "round"
        })])])])], -1)),
        Qs = {
            class: "app-container_status-info"
        },
        td = ut(() => t("span", {
            class: "container_success"
        }, "Connected", -1)),
        ed = {
            class: "container_time"
        },
        ad = {
            key: 1,
            class: "app-container_status-container_body"
        },
        od = ut(() => t("svg", {
            width: "50px",
            height: "50px",
            viewBox: "0 0 50 50",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, [t("g", {
            id: "icon_internet-alert",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "wancheng"
        }, [t("path", {
            d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
            id: "Path",
            "fill-opacity": "0.08",
            fill: "#FAAD14",
            "fill-rule": "nonzero"
        }), t("g", {
            id: "Group-2",
            transform: "translate(10.000000, 10.000000)"
        }, [t("path", {
            d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
            id: "Path",
            fill: "#FAAD14",
            "fill-rule": "nonzero"
        }), t("path", {
            d: "M15,6 C15.8284271,6 16.5,6.67157288 16.5,7.5 L16.5,18.5 C16.5,19.3284271 15.8284271,20 15,20 C14.1715729,20 13.5,19.3284271 13.5,18.5 L13.5,7.5 C13.5,6.67157288 14.1715729,6 15,6 Z",
            id: "Path",
            fill: "#FFFFFF"
        }), t("path", {
            d: "M15,25 C14.171875,25 13.5,24.328125 13.5,23.5 C13.5,22.671875 14.171875,22 15,22 C15.828125,22 16.5,22.671875 16.5,23.5 C16.5,24.328125 15.828125,25 15,25 Z",
            id: "Path",
            fill: "#FFFFFF"
        })])])])], -1)),
        nd = {
            class: "app-container_status-info"
        },
        id = ut(() => t("span", {
            class: "container_failure"
        }, "DNS Mistake", -1)),
        rd = {
            class: "container_time"
        },
        sd = {
            key: 2,
            class: "app-container_status-container_body"
        },
        dd = ut(() => t("svg", {
            width: "50px",
            height: "50px",
            viewBox: "0 0 50 50",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, [t("g", {
            id: "icon_internet-alert",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "wancheng"
        }, [t("path", {
            d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
            id: "Path",
            "fill-opacity": "0.08",
            fill: "#FAAD14",
            "fill-rule": "nonzero"
        }), t("g", {
            id: "Group-2",
            transform: "translate(10.000000, 10.000000)"
        }, [t("path", {
            d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
            id: "Path",
            fill: "#FAAD14",
            "fill-rule": "nonzero"
        }), t("path", {
            d: "M15,6 C15.8284271,6 16.5,6.67157288 16.5,7.5 L16.5,18.5 C16.5,19.3284271 15.8284271,20 15,20 C14.1715729,20 13.5,19.3284271 13.5,18.5 L13.5,7.5 C13.5,6.67157288 14.1715729,6 15,6 Z",
            id: "Path",
            fill: "#FFFFFF"
        }), t("path", {
            d: "M15,25 C14.171875,25 13.5,24.328125 13.5,23.5 C13.5,22.671875 14.171875,22 15,22 C15.828125,22 16.5,22.671875 16.5,23.5 C16.5,24.328125 15.828125,25 15,25 Z",
            id: "Path",
            fill: "#FFFFFF"
        })])])])], -1)),
        ud = {
            class: "app-container_status-info"
        },
        ld = ut(() => t("span", {
            class: "container_failure"
        }, "Software Source Error", -1)),
        cd = {
            class: "container_time"
        },
        pd = {
            key: 3,
            class: "app-container_status-container_body"
        },
        fd = ut(() => t("svg", {
            width: "50px",
            height: "50px",
            viewBox: "0 0 50 50",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, [t("g", {
            id: "icon_internet-alert",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "wancheng"
        }, [t("path", {
            d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
            id: "Path",
            "fill-opacity": "0.08",
            fill: "#FAAD14",
            "fill-rule": "nonzero"
        }), t("g", {
            id: "Group-2",
            transform: "translate(10.000000, 10.000000)"
        }, [t("path", {
            d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
            id: "Path",
            fill: "#FAAD14",
            "fill-rule": "nonzero"
        }), t("path", {
            d: "M15,6 C15.8284271,6 16.5,6.67157288 16.5,7.5 L16.5,18.5 C16.5,19.3284271 15.8284271,20 15,20 C14.1715729,20 13.5,19.3284271 13.5,18.5 L13.5,7.5 C13.5,6.67157288 14.1715729,6 15,6 Z",
            id: "Path",
            fill: "#FFFFFF"
        }), t("path", {
            d: "M15,25 C14.171875,25 13.5,24.328125 13.5,23.5 C13.5,22.671875 14.171875,22 15,22 C15.828125,22 16.5,22.671875 16.5,23.5 C16.5,24.328125 15.828125,25 15,25 Z",
            id: "Path",
            fill: "#FFFFFF"
        })])])])], -1)),
        md = {
            class: "app-container_status-info"
        },
        bd = ut(() => t("span", {
            class: "container_failure"
        }, "Disconnected", -1)),
        vd = {
            class: "container_time"
        },
        gd = {
            key: 4,
            class: "app-container_status-container_body"
        },
        _d = ut(() => t("svg", {
            width: "50px",
            height: "50px",
            viewBox: "0 0 50 50",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, [t("g", {
            id: "icon_internet-launching",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "wancheng",
            "fill-rule": "nonzero"
        }, [t("path", {
            d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
            id: "Path",
            "fill-opacity": "0.08",
            fill: "#3ED4AB"
        }), t("g", {
            id: "Group-2",
            transform: "translate(10.000000, 10.000000)"
        }, [t("path", {
            d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
            id: "Path",
            fill: "#3ED4AB"
        }), t("path", {
            d: "M11.5738525,15.0233901 C11.5738525,14.8431935 11.5023882,14.6703653 11.3750746,14.5429471 C11.2477609,14.4155288 11.0750745,14.3439644 10.8950258,14.3440059 L7.67882684,14.3440059 C7.49875102,14.3439644 7.326041,14.4155503 7.19872281,14.5430024 C7.07140462,14.6704545 6.99991721,14.8433228 7.00000007,15.0235465 C7.00000007,15.2037431 7.0714644,15.3765713 7.19877809,15.5039895 C7.32609178,15.6314078 7.4987781,15.7029722 7.67882684,15.7029307 L10.8950258,15.7029307 C11.0750745,15.7029722 11.2477609,15.6314078 11.3750746,15.5039895 C11.5023882,15.3765713 11.5738525,15.2037431 11.5738525,15.0235465 L11.5738525,15.0233901 Z M22.3211553,14.3440059 L19.1049564,14.3440059 C18.9248806,14.3439644 18.7521705,14.4155503 18.6248524,14.5430024 C18.4975342,14.6704545 18.4260468,14.8433228 18.4261296,15.0235465 C18.4261296,15.2037431 18.4975939,15.3765713 18.6249076,15.5039895 C18.7522213,15.6314078 18.9249076,15.7029722 19.1049564,15.7029307 L22.3211553,15.7029307 C22.5012041,15.7029722 22.6738904,15.6314078 22.8012041,15.5039895 C22.9285178,15.3765713 22.9999911,15.2037431 22.9999911,15.0235465 C23.0019042,14.6481319 22.6962619,14.3440059 22.3211553,14.3440059 Z M15.0075079,18.6494887 C14.8274565,18.6494887 14.6547678,18.7210138 14.5274536,18.8484354 C14.4001395,18.9758571 14.3286356,19.1486892 14.3286812,19.3288885 L14.3286812,22.3206158 C14.3286398,22.5008124 14.4001455,22.6736405 14.5274592,22.8010588 C14.6547729,22.928477 14.8274592,23 15.0075079,23 C15.1875567,23 15.360243,22.928477 15.4875567,22.8010588 C15.6148704,22.6736405 15.6863761,22.5008124 15.6863348,22.3206158 L15.6863348,19.3308123 C15.6866114,18.9551699 15.3828413,18.6502825 15.0075079,18.6494887 Z M15.0075079,7 C14.8274592,7 14.6547729,7.07152297 14.5274592,7.19894122 C14.4001455,7.32635946 14.3286398,7.49918761 14.3286812,7.67938422 L14.3286812,10.8982245 C14.3286398,11.0784212 14.4001455,11.2512493 14.5274592,11.3786675 C14.6547729,11.5060858 14.8274592,11.5776088 15.0075079,11.5776088 C15.1875567,11.5776088 15.360243,11.5060858 15.4875567,11.3786675 C15.6148704,11.2512493 15.6863761,11.0784212 15.6863346,10.8982245 L15.6863346,7.67938422 C15.6863761,7.49918761 15.6148704,7.32635946 15.4875567,7.19894122 C15.360243,7.07152297 15.1875567,7 15.0075079,7 Z M11.6020132,17.4145291 L9.32916742,19.6892415 C9.06467707,19.9548666 9.06467707,20.3845576 9.32916742,20.6501827 C9.45618492,20.7780764 9.62906847,20.8497648 9.80924376,20.8492554 C9.98367775,20.8492554 10.1560177,20.783579 10.2893201,20.6501827 L12.5637599,18.3738593 C12.8282503,18.1082342 12.8282503,17.6785432 12.5637599,17.4129181 C12.2975184,17.147886 11.8671244,17.1486768 11.601857,17.4146855 L11.6020132,17.4145291 Z M17.8766048,12.7750942 C18.0510388,12.7750942 18.2236912,12.7094361 18.3566811,12.5760242 L20.6314491,10.29956 C20.8959395,10.0339349 20.8959395,9.6042439 20.6314491,9.3386188 C20.366042,9.07391123 19.9367036,9.07391123 19.6712965,9.3386188 L17.3966847,11.6133312 C17.1321944,11.8789563 17.1321944,12.3086474 17.3966847,12.5742725 C17.5235351,12.7026276 17.6963754,12.7749288 17.8767611,12.7750942 L17.8766048,12.7750942 Z M18.5349595,17.572293 C18.2695524,17.3075854 17.8402139,17.3075854 17.5748068,17.572293 C17.3103165,17.8379181 17.3103165,18.2676091 17.5748068,18.5332342 L19.6882679,20.6501827 C19.8152854,20.7780764 19.988169,20.8497648 20.1683442,20.8492554 C20.342747,20.8492554 20.5152744,20.783579 20.6484206,20.6501827 C20.9129109,20.3845576 20.9129109,19.9548666 20.6484206,19.6892415 L18.5349595,17.5722773 L18.5349595,17.572293 Z M10.2891638,9.35734026 C10.0237567,9.09263269 9.59441827,9.09263269 9.32901114,9.35734026 C9.06452079,9.62296536 9.06452079,10.0526564 9.32901114,10.3182815 L11.6037635,12.594902 C11.7308042,12.7227441 11.9036849,12.7943806 12.0838399,12.7938344 C12.2582738,12.7938344 12.43077,12.7281576 12.5639162,12.594902 C12.8284065,12.3292769 12.8284065,11.8995859 12.5639162,11.6339608 L10.2891638,9.3573559 L10.2891638,9.35734026 Z",
            id: "Shape",
            fill: "#FFFFFF"
        })])])])], -1)),
        hd = ut(() => t("div", {
            class: "app-container_status-info"
        }, [t("span", {
            class: "container_failure"
        }, "Checking...")], -1)),
        xd = [_d, hd],
        kd = {
            class: "app-container_status-label_item",
            style: {
                "padding-left": "10px"
            }
        },
        wd = {
            class: "app-container_status-container",
            style: {
                height: "100%"
            }
        },
        yd = {
            class: "more_icon",
            title: "View device information"
        },
        Fd = {
            class: "DeviceBlock"
        },
        Ed = ut(() => t("li", null, [t("a", {
            href: "/cgi-bin/luci/admin/status/routes"
        }, "Device Routing")], -1)),
        Cd = {
            class: "app-container_status-container_body"
        },
        $d = ut(() => t("svg", {
            width: "50px",
            height: "50px",
            viewBox: "0 0 50 50",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, [t("title", null, "icon_device number"), t("g", {
            id: "icon_device-number",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "wancheng",
            "fill-rule": "nonzero"
        }, [t("path", {
            d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
            id: "Path",
            "fill-opacity": "0.0804503114",
            fill: "#03C5FC"
        }), t("g", {
            id: "Group-2",
            transform: "translate(10.000000, 10.000000)"
        }, [t("path", {
            d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
            id: "Path",
            fill: "#03C5FC"
        }), t("g", {
            id: "kehuduanIP",
            transform: "translate(5.000000, 7.000000)",
            fill: "#FFFFFF"
        }, [t("path", {
            d: "M8.3164557,11.2822134 L2.39240506,11.2822134 C2.25316456,11.2822134 2.13924051,11.1683794 2.13924051,11.029249 L2.13924051,1.39130435 C2.13924051,1.25217391 2.25316456,1.13833992 2.39240506,1.13833992 L16.6075949,1.13833992 C16.7468354,1.13833992 16.8607595,1.25217391 16.8607595,1.39130435 L16.8607595,3.51620553 C17.2658228,3.5541502 17.6582278,3.69328063 18,3.9083004 L18,1.39130435 C18,0.619762846 17.3797468,0 16.6075949,0 L2.39240506,0 C1.62025316,0 1,0.619762846 1,1.39130435 L1,11.029249 C1,11.8007905 1.62025316,12.4205534 2.39240506,12.4205534 L7.15189873,12.4205534 L7.15189873,14.2798419 L6.40506329,14.2798419 C5.93670886,14.2798419 5.5443038,14.6592885 5.5443038,15.1399209 C5.5443038,15.6079051 5.92405063,16 6.40506329,16 L8.79746835,16 C8.48101266,15.5699605 8.3164557,15.0513834 8.3164557,14.5201581 L8.3164557,11.2822134 Z",
            id: "Path"
        }), t("path", {
            d: "M12.4062969,15.2371365 L12.4062969,14.0436242 L10.0074963,14.0436242 L10.0074963,6.39038031 C10.0074963,6.23042506 10.1394303,6.10738255 10.2833583,6.10738255 L15.6446777,6.10738255 C15.8005997,6.10738255 15.9205397,6.24272931 15.9205397,6.39038031 L15.9205397,8.77740492 L16.3283358,8.77740492 C16.5682159,8.77740492 16.7961019,8.85123043 17,8.97427293 L17,6.39038031 C17,5.62751678 16.3883058,5 15.6446777,5 L10.3313343,5 C9.58770615,5.0246085 9,5.63982103 9,6.39038031 L9,14.6465324 C9.02398801,15.3847875 9.61169415,15.9753915 10.3313343,16 L12.6581709,16 C12.5022489,15.7785235 12.4182909,15.50783 12.4062969,15.2371365 C12.4062969,15.2248322 12.4062969,15.2371365 12.4062969,15.2371365 L12.4062969,15.2371365 Z",
            id: "Path"
        }), t("path", {
            d: "M17.1515152,10 L13.8484848,10 C13.3787879,10 13,10.2857143 13,10.64 L13,15.36 C13,15.7142857 13.3787879,16 13.8484848,16 L17.1515152,16 C17.6212121,16 18,15.7142857 18,15.36 L18,10.64 C18,10.2857143 17.6212121,10 17.1515152,10 Z M14.0151515,10.7657143 L16.9848485,10.7657143 L16.9848485,14.8457143 L14.0151515,14.8457143 L14.0151515,10.7657143 L14.0151515,10.7657143 Z M15.4545455,15.6914286 C15.2575758,15.6914286 15.1060606,15.5657143 15.1060606,15.4285714 C15.1060606,15.28 15.2727273,15.1657143 15.469697,15.1657143 C15.6666667,15.1657143 15.8181818,15.2914286 15.8181818,15.44 C15.8181818,15.5085714 15.7727273,15.5885714 15.6969697,15.6342857 C15.6363636,15.68 15.5454545,15.7028571 15.4545455,15.6914286 C15.4545455,15.7028571 15.4545455,15.6914286 15.4545455,15.6914286 L15.4545455,15.6914286 Z",
            id: "Shape"
        })])])])])], -1)),
        Dd = {
            class: "app-container_status-info"
        },
        Bd = {
            class: "container_content"
        },
        Yd = ut(() => t("span", {
            class: "devise"
        }, "Online Users", -1)),
        Ad = ut(() => t("em", null, null, -1)),
        Sd = {
            class: "app-container_status-container"
        },
        zd = {
            class: "more_icon",
            title: "Speed test"
        },
        Pd = {
            class: "DeviceBlock"
        },
        Td = {
            class: "app-container_title"
        },
        Id = {
            class: "app-container_status-label_block"
        },
        Ld = {
            class: "app-container_status-label_block"
        },
        IPd = {
            class: "app-container_status-label_block"
        },
        Md = {
            class: "app-container_title"
        },
        Od = {
            class: "app-container_status-label_block"
        },
        Nd = ut(() => t("em", null, null, -1)),
        qd = {
            class: "app-container_status-container"
        },
        Vd = {
            class: "app-container_title"
        },
        Gd = ut(() => t("span", null, "Network Interfaces", -1)),
        jd = {
            class: "more_icon",
            title: "View network interface information"
        },
        Rd = {
            class: "DeviceBlock"
        },
        Ud = U("Network Port Configuration"),
        Wd = {
            class: "app-container_body"
        },
        Hd = P({
            props: {
                homebox: {
                    type: Object
                }
            },
            setup(e) {
                const a = () => {
                        oa()
                    },
                    o = () => {
                        ra()
                    },
                    n = le(),
                    s = R(() => n.status),
                    c = R(() => n.deviceList),
                    p = y(!1),
                    f = y(!1),
                    d = y(!1),
                    l = it({
                        portList: [],
                        load: !1
                    }),
                    u = $ => {
                        switch ($) {
                            case "pppoe":
                                return "PPPoE Client";
                            case "static":
                                return "Static network";
                            case "dhcp":
                                return "DHCP Client"
                        }
                        return $ && $.toUpperCase()
                    },
                    m = $ => {
                        switch ($) {
                            case "manual":
                                return "Manual";
                            case "auto":
                                return "Automatic";
                            default:
                                return ""
                        }
                    },
                    b = () => {
                        S.Network.PortList.GET().then($ => {
                            if ($ != null && $.data) {
                                const {
                                    result: q
                                } = $ == null ? void 0 : $.data;
                                q && (l.portList = q.ports || [])
                            }
                        }).finally(() => {
                            l.load = !0, _()
                        })
                    },
                    _ = () => {
                        setTimeout(() => {
                            b()
                        }, 1e4)
                    };
                b();
                const v = yt.stampForm,
                    g = () => {
                        p.value = !p.value
                    },
                    k = () => {
                        f.value = !f.value
                    },
                    x = () => {
                        d.value = !d.value
                    },
                    E = () => {
                        g(), location.href = "/cgi-bin/luci/admin/services/nlbw"
                    },
                    A = () => T(this, null, function* () {
                        var $, q, H;
                        if (k(), yield ct.checkAndInstallApp("app-meta-homebox", "Homebox")) try {
                            const G = yield S.Network.Homebox.Enable.POST();
                            (q = ($ = G == null ? void 0 : G.data) == null ? void 0 : $.result) != null && q.port ? ss({
                                port: G.data.result.port,
                                setup: 0
                            }) : ((H = G == null ? void 0 : G.data) == null ? void 0 : H.success) == 0 ? location.href = "/cgi-bin/luci/admin/services/homebox" : F.Warning("\u542F\u52A8\u5931\u8D25")
                        } catch (G) {
                            F.Warning("\u542F\u52A8\u5931\u8D25")
                        }
                    }),
                    B = () => {
                        k(), ct.installAndGo("app-meta-systools", "SysTools", "/cgi-bin/luci/admin/system/systools/pages")
                    };
                return ($, q) => {
                    var G, Z;
                    const H = X("router-link");
                    return i(), r(L, null, [t("div", Hs, [t("div", Zs, [t("div", Js, [w(s) != null ? (i(), r(L, {
                        key: 0
                    }, [w(s).networkInfo == "netSuccess" ? (i(), r("div", Xs, [Ks, t("div", Qs, [td, t("span", ed, h(w(v)(w(s).uptimeStamp)), 1)])])) : w(s).networkInfo == "dnsFailed" ? (i(), r("div", ad, [od, t("div", nd, [id, t("span", rd, h(w(v)(w(s).uptimeStamp)), 1), t("div", {
                        onClick: a,
                        class: "container_configure"
                    }, "DNS\u914D\u7F6E")])])) : w(s).networkInfo == "softSourceFailed" ? (i(), r("div", sd, [dd, t("div", ud, [ld, t("span", cd, h(w(v)(w(s).uptimeStamp)), 1), t("div", {
                        onClick: o,
                        class: "container_configure"
                    }, "\u8F6F\u4EF6\u6E90\u914D\u7F6E")])])) : w(s).networkInfo == "netFailed" ? (i(), r("div", pd, [fd, t("div", md, [bd, t("span", vd, h(w(v)(w(s).uptimeStamp)), 1)])])) : (i(), r("div", gd, xd))], 64)) : C("", !0)])]), t("div", kd, [t("div", wd, [t("span", yd, [D($t, {
                        onClick: g
                    })]), z(t("div", Fd, [t("div", {
                        class: "menu_background",
                        onClick: g
                    }), t("ul", null, [Ed, t("li", null, [t("a", {
                        onClick: E
                    }, "Bandwidth Monitoring")])])], 512), [
                        [wt, p.value]
                    ]), t("div", Cd, [$d, t("div", Dd, [t("span", Bd, h(((Z = (G = w(c)) == null ? void 0 : G.devices) == null ? void 0 : Z.length) || 0), 1), Yd])])])])]), Ad, t("div", Sd, [t("span", zd, [D($t, {
                        onClick: k
                    })]), z(t("div", Pd, [t("div", {
                        class: "menu_background",
                        onClick: k
                    }), t("ul", null, [t("li", null, [t("a", {
                        onClick: A
                    }, "\u5185\u7F51\u6D4B\u901F")]), t("li", null, [t("a", {
                        onClick: B
                    }, "\u5916\u7F51\u6D4B\u901F")])])], 512), [
                        [wt, f.value]
                    ]), t("div", Td, [t("span", null, "IP Address\uFF08" + h(w(s).defaultInterface) + "\uFF09", 1)]), t("div", Id, [t("span", null, " IPv4\uFF1A " + h(w(s).ipv4addr) + " \uFF08" + h(u(w(s).proto || "")) + "\uFF09 ", 1)]), t("div", Ld, [t("span", null, "IPv6\uFF1A" + h(w(s).ipv6addr), 1)]), t("div", IPd, [t("span", null, "Public\uFF1A" + h(w(s).ipv6addr), 1)]), t("div", Md, [t("span", null, "DNS\uFF08" + h(m(w(s).dnsProto)) + "\uFF09", 1)]), (i(!0), r(L, null, j(w(s).dnsList, ht => (i(), r("div", Od, [t("span", null, h(ht), 1)]))), 256))]), Nd, t("div", qd, [t("div", Vd, [Gd, t("span", jd, [D($t, {
                        onClick: x
                    })]), z(t("div", Rd, [t("div", {
                        class: "menu_background",
                        onClick: x
                    }), t("ul", null, [t("li", null, [D(H, {
                        to: "/interfaceconfig"
                    }, {
                        default: V(() => [Ud]),
                        _: 1
                    })])])], 512), [
                        [wt, d.value]
                    ])]), t("div", Wd, [w(l).load ? (i(), M(ks, {
                        key: 0,
                        portList: w(l).portList
                    }, null, 8, ["portList"])) : C("", !0)])])], 64)
                }
            }
        });
    var Zd = Y(Hd, [
        ["__scopeId", "data-v-fd7a24a6"]
    ]);
    const Jd = {
            class: "network-container"
        },
        Xd = {
            class: "network-container_flow"
        },
        Kd = {
            class: "network-container_flow-container"
        },
        Qd = {
            class: "network-container_status"
        },
        t0 = P({
            setup(e) {
                return (a, o) => (i(), r("div", Jd, [t("div", Xd, [t("div", Kd, [D(qi)])]), t("div", Qd, [D(Zd)])]))
            }
        });
    var e0 = Y(t0, [
        ["__scopeId", "data-v-6cd42792"]
    ]);
    const a0 = {},
        o0 = {
            width: "14px",
            height: "14px",
            viewBox: "0 0 14 14",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        n0 = t("g", {
            id: "icon_alert",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "Icon/Warning"
        }, [t("rect", {
            id: "\u77E9\u5F62",
            fill: "#000000",
            "fill-rule": "nonzero",
            opacity: "0",
            x: "0",
            y: "0",
            width: "14",
            height: "14"
        }), t("path", {
            d: "M7,0.875 C3.61757813,0.875 0.875,3.61757813 0.875,7 C0.875,10.3824219 3.61757813,13.125 7,13.125 C10.3824219,13.125 13.125,10.3824219 13.125,7 C13.125,3.61757813 10.3824219,0.875 7,0.875 Z M6.5625,4.046875 C6.5625,3.98671875 6.61171875,3.9375 6.671875,3.9375 L7.328125,3.9375 C7.38828125,3.9375 7.4375,3.98671875 7.4375,4.046875 L7.4375,7.765625 C7.4375,7.82578125 7.38828125,7.875 7.328125,7.875 L6.671875,7.875 C6.61171875,7.875 6.5625,7.82578125 6.5625,7.765625 L6.5625,4.046875 Z M7,10.0625 C6.63769531,10.0625 6.34375,9.76855469 6.34375,9.40625 C6.34375,9.04394531 6.63769531,8.75 7,8.75 C7.36230469,8.75 7.65625,9.04394531 7.65625,9.40625 C7.65625,9.76855469 7.36230469,10.0625 7,10.0625 Z",
            id: "\u5F62\u72B6",
            fill: "#FAAD14"
        })])], -1),
        i0 = [n0];

    function r0(e, a) {
        return i(), r("svg", o0, i0)
    }
    var gt = Y(a0, [
        ["render", r0]
    ]);
    const s0 = {},
        d0 = {
            width: "18px",
            height: "18px",
            viewBox: "0 0 18 18",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        u0 = Mt('<title>Partition information</title><g id="icon_info" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group"><circle id="Oval" stroke="#333333" cx="9" cy="9" r="8.5"></circle><circle id="Oval" fill="#333333" cx="5" cy="9" r="1"></circle><circle id="Oval" fill="#333333" cx="9" cy="9" r="1"></circle><circle id="Oval" fill="#333333" cx="13" cy="9" r="1"></circle></g></g>', 2),
        l0 = [u0];

    function c0(e, a) {
        return i(), r("svg", d0, l0)
    }
    var Ue = Y(s0, [
        ["render", c0]
    ]);
    const p0 = {},
        f0 = {
            width: "18px",
            height: "18px",
            viewBox: "0 0 18 18",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        m0 = Mt('<title>Full disk format</title><g id="icon_disk-formatting" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-15" stroke="#333333"><circle id="Oval" cx="9" cy="9" r="8.5"></circle><g id="Group-16" transform="translate(4.000000, 4.500000)" stroke-linejoin="round"><polygon id="Rectangle" points="0.911080155 0 9.08891985 0 10 6 -8.8817842e-16 6"></polygon><rect id="Rectangle" transform="translate(5.000000, 7.500000) scale(1, -1) translate(-5.000000, -7.500000) " x="0" y="6" width="10" height="3"></rect></g></g></g>', 2),
        b0 = [m0];

    function v0(e, a) {
        return i(), r("svg", f0, b0)
    }
    var g0 = Y(p0, [
        ["render", v0]
    ]);
    const Yt = e => (O("data-v-3a0bca4c"), e = e(), N(), e),
        _0 = ["onSubmit"],
        h0 = Yt(() => t("div", {
            class: "action-header"
        }, [t("div", {
            class: "action-header_title"
        }, "Hard Disk Configuration")], -1)),
        x0 = {
            class: "action-body"
        },
        k0 = {
            class: "disk-info"
        },
        w0 = Yt(() => t("div", {
            class: "disk-info_icon"
        }, [t("svg", {
            t: "1642589762094",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "11301",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M899.892468 123.889088c0-44.342099-36.286708-80.620486-80.624646-80.620486H204.728017C160.385918 43.268602 124.107532 79.546988 124.107532 123.889088v802.847056c0 44.342099 36.278386 80.620486 80.620485 80.620486h614.539805c44.337938 0 80.624646-36.278386 80.624646-80.620486V123.889088z",
            fill: "#D0D0DB",
            "p-id": "11302"
        }), t("path", {
            d: "M169.8768 977.7772V174.930143c0-44.342099 36.278386-80.620486 80.620486-80.620485h614.539804c9.936092 0 19.426974 1.905666 28.239639 5.23434-11.525534-30.507298-40.996782-52.389169-75.398629-52.389169H203.342457c-44.342099 0-80.620486 36.278386-80.620486 80.620486v802.851217c0 34.410168 21.881871 63.873094 52.385008 75.381985A79.730065 79.730065 0 0 1 169.8768 977.7772z",
            fill: "#FFFFFF",
            "p-id": "11303"
        }), t("path", {
            d: "M820.657543 40.497481H206.117739c-44.342099 0-80.620486 36.278386-80.620486 80.620485v802.847057c0 44.342099 36.278386 80.620486 80.620486 80.620486h614.539804c44.337938 0 80.624646-36.278386 80.624647-80.620486V121.117966c0-44.342099-36.286708-80.620486-80.624647-80.620485z m19.60173 828.785749c0 40.846992-33.43237 74.279362-74.287684 74.279361H199.780776c-40.855313 0-74.279362-33.424048-74.279362-74.279361V129.593603c0-40.855313 33.424048-74.279362 74.279362-74.279362h566.203296c40.842831 0 74.283522 33.424048 74.283522 74.279362l-0.008321 739.689627z",
            fill: "#6E6E96",
            "p-id": "11304"
        }), t("path", {
            d: "M815.106979 1024H200.567175C146.933914 1024 103.303319 980.369405 103.303319 926.736144V123.889088C103.303319 70.255827 146.933914 26.625232 200.567175 26.625232h614.539804c53.633261 0 97.268017 43.630595 97.268017 97.263856v802.847056c0 53.633261-43.634756 97.263856-97.268017 97.263856zM200.567175 59.911972C165.287391 59.911972 136.590059 88.609303 136.590059 123.889088v802.847056c0 35.279784 28.697331 63.977115 63.977116 63.977115h614.539804c35.279784 0 63.981276-28.697331 63.981276-63.977115V123.889088c0-35.279784-28.701492-63.977115-63.981276-63.977116H200.567175z",
            fill: "#6E6E96",
            "p-id": "11305"
        }), t("path", {
            d: "M301.946104 941.515457h429.985632v65.841173H301.946104z",
            fill: "#8A8AA1",
            "p-id": "11306"
        }), t("path", {
            d: "M731.931736 1024H301.946104a16.64337 16.64337 0 0 1-16.64337-16.64337V941.515457a16.64337 16.64337 0 0 1 16.64337-16.64337h429.985632a16.64337 16.64337 0 0 1 16.64337 16.64337v65.841173a16.64337 16.64337 0 0 1-16.64337 16.64337z m-413.342262-33.286741h396.698892v-32.554432H318.589474v32.554432z",
            fill: "#6E6E96",
            "p-id": "11307"
        }), t("path", {
            d: "M337.230049 960.318304h20.804213v47.038326h-20.804213zM386.565159 960.318304h20.804213v47.038326h-20.804213zM435.891948 960.318304h20.804213v47.038326h-20.804213zM485.231219 960.318304h20.804213v47.038326h-20.804213zM534.558008 960.318304h20.804213v47.038326h-20.804213zM583.897279 960.318304h20.804213v47.038326h-20.804213zM633.224068 960.318304h20.804213v47.038326h-20.804213zM682.563339 960.318304h20.804213v47.038326h-20.804213z",
            fill: "#FFE599",
            "p-id": "11308"
        }), t("path", {
            d: "M219.153659 140.794591m-26.874883 0a26.874882 26.874882 0 1 0 53.749765 0 26.874882 26.874882 0 1 0-53.749765 0Z",
            fill: "#ADADD1",
            "p-id": "11309"
        }), t("path", {
            d: "M219.153659 184.312843c-23.995579 0-43.518252-19.522673-43.518253-43.518252s19.522673-43.518252 43.518253-43.518253 43.518252 19.522673 43.518252 43.518253-19.522673 43.518252-43.518252 43.518252z m0-53.749764c-5.642103 0-10.231512 4.589409-10.231512 10.231512s4.589409 10.231512 10.231512 10.231512 10.231512-4.589409 10.231511-10.231512-4.589409-10.231512-10.231511-10.231512z",
            fill: "#6E6E96",
            "p-id": "11310"
        }), t("path", {
            d: "M801.28466 140.794591m-26.870721 0a26.870721 26.870721 0 1 0 53.741442 0 26.870721 26.870721 0 1 0-53.741442 0Z",
            fill: "#ADADD1",
            "p-id": "11311"
        }), t("path", {
            d: "M801.28466 184.308683c-23.995579 0-43.514092-19.518512-43.514091-43.514092s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514092z m0-53.741443c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
            fill: "#6E6E96",
            "p-id": "11312"
        }), t("path", {
            d: "M801.280499 905.23291m-26.870721 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
            fill: "#ADADD1",
            "p-id": "11313"
        }), t("path", {
            d: "M801.280499 948.747001c-23.995579 0-43.514092-19.518512-43.514091-43.514091s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
            fill: "#6E6E96",
            "p-id": "11314"
        }), t("path", {
            d: "M219.153659 905.23291m-26.870722 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
            fill: "#ADADD1",
            "p-id": "11315"
        }), t("path", {
            d: "M219.153659 948.747001c-23.995579 0-43.514092-19.518512-43.514092-43.514091s19.518512-43.514092 43.514092-43.514092 43.514092 19.518512 43.514091 43.514092-19.522673 43.514092-43.514091 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
            fill: "#6E6E96",
            "p-id": "11316"
        }), t("path", {
            d: "M520.972857 777.43263c-142.542145 0-258.508988-115.971004-258.508988-258.52147a16.64337 16.64337 0 0 1 33.28674 0c0 124.19699 101.033579 225.23473 225.222248 225.23473s225.222248-101.03774 225.222248-225.23473c0-124.188668-101.033579-225.218087-225.222248-225.218087a16.64337 16.64337 0 0 1 0-33.286741c142.542145 0 258.508988 115.966843 258.508988 258.504828 0 142.550466-115.966843 258.521471-258.508988 258.52147z",
            fill: "#6E6E96",
            "p-id": "11317"
        }), t("path", {
            d: "M520.968696 518.919481m-83.312551 0a83.312551 83.312551 0 1 0 166.625102 0 83.312551 83.312551 0 1 0-166.625102 0Z",
            fill: "#A9A9BA",
            "p-id": "11318"
        }), t("path", {
            d: "M520.968696 618.875402c-55.114521 0-99.955921-44.83724-99.955921-99.95176 0-55.118682 44.8414-99.955921 99.955921-99.955921s99.95176 44.8414 99.95176 99.955921c0 55.11036-44.83724 99.95176-99.95176 99.95176z m0-166.625101c-36.761044 0-66.669181 29.908136-66.66918 66.66918s29.908136 66.66502 66.66918 66.66502 66.66502-29.908136 66.66502-66.66502c0-36.761044-29.903976-66.669181-66.66502-66.66918z",
            fill: "#6E6E96",
            "p-id": "11319"
        }), t("path", {
            d: "M301.946104 941.515457h429.985632v36.977408H301.946104z",
            fill: "#6E6E96",
            "p-id": "11320"
        })])], -1)),
        y0 = {
            key: 0,
            class: "disk-info_mount-name"
        },
        F0 = {
            key: 1,
            class: "disk-info_mount-name"
        },
        E0 = {
            key: 0,
            class: "label-item"
        },
        C0 = Yt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "Target partition")], -1)),
        $0 = {
            class: "label-item_path"
        },
        D0 = {
            class: "label-item"
        },
        B0 = Yt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "Formatting options")], -1)),
        Y0 = {
            class: "label-item_value"
        },
        A0 = ["disabled"],
        S0 = {
            key: 0,
            value: ""
        },
        z0 = Yt(() => t("option", {
            value: "format"
        }, "Format", -1)),
        P0 = {
            key: 1,
            value: "default"
        },
        T0 = {
            class: "label-item_value"
        },
        I0 = {
            key: 0,
            class: "msg"
        },
        L0 = {
            key: 1,
            class: "msg"
        },
        M0 = {
            class: "action-footer"
        },
        O0 = Yt(() => t("div", {
            class: "auto"
        }, null, -1)),
        N0 = ["disabled"],
        q0 = ["disabled"],
        V0 = {
            key: 1,
            class: "action result"
        },
        G0 = {
            class: "action-body"
        },
        j0 = Yt(() => t("div", {
            class: "action-body_icon"
        }, [t("svg", {
            t: "1642063181211",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "5062",
            width: "128",
            height: "128",
            "data-v-cda444e0": ""
        }, [t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063",
            "data-v-cda444e0": ""
        })])], -1)),
        R0 = Yt(() => t("div", {
            class: "action-body_msg"
        }, "Formatted Successfully", -1)),
        U0 = {
            key: 0,
            class: "action-body_info"
        },
        W0 = {
            key: 1,
            class: "action-body_info"
        },
        H0 = U("The partition has been successfully initialized to "),
        Z0 = {
            class: "btns"
        },
        J0 = P({
            props: {
                action: String,
                disk: {
                    type: Object,
                    required: !0
                },
                mount: {
                    type: Object
                },
                Close: {
                    type: Function
                },
                Cancel: {
                    type: Function
                },
                Next: {
                    type: Function
                }
            },
            setup(e) {
                const a = e,
                    o = () => {
                        a.Close && a.Close()
                    },
                    n = x => {
                        x.preventDefault(), a.Cancel && a.Cancel(), o()
                    },
                    s = x => {
                        a.Next && a.Next(x), o()
                    },
                    c = y(!1),
                    p = y(0),
                    f = x => {
                        p.value = x
                    },
                    d = y(a.action == "nas" ? "" : "format"),
                    l = y(),
                    u = y(),
                    m = () => {
                        switch (d.value) {
                            case "format":
                                _();
                                return;
                            case "default":
                                b();
                                return;
                            default:
                                F.Warning("Please select a line");
                                return
                        }
                    },
                    b = () => {
                        let x = "";
                        const E = a.mount;
                        if (E != null && E.mountPoint != null && (x = E.mountPoint), x != "") {
                            s(x);
                            return
                        }
                        F.Warning("Path not recognized")
                    },
                    _ = () => {
                        const x = a.disk,
                            E = a.mount;
                        if (E) {
                            const A = E.mountPoint || E.path;
                            if (!confirm(`WARNING: Format will remove ${A} partition data, please operate with caution`) || !confirm(`Are you sure to format ${A}?`)) return;
                            g(E);
                            return
                        }
                        if (x) {
                            if (!confirm(`WARNING: This operation will initialize ${x.venderModel} hard disk and create partitions, please operate with caution`) || !confirm("Are you sure to initialize?")) return;
                            v(x);
                            return
                        }
                        F.Warning("Unrecognized data")
                    },
                    v = x => T(this, null, function* () {
                        if (x.name == null || x.path == "") {
                            F.Warning("Can't get device name");
                            return
                        }
                        if (x.path == null || x.path == "") {
                            F.Warning("Can't get device path");
                            return
                        }
                        c.value = !0;
                        const E = F.Loading("Initializing...");
                        try {
                            const A = yield S.Nas.Disk.Init.POST({
                                name: x.name,
                                path: x.path
                            });
                            if (A != null && A.data) {
                                const {
                                    result: B,
                                    error: $
                                } = A == null ? void 0 : A.data;
                                $ && F.Warning($), B && (B.errorInfo ? F.Warning(B.errorInfo) : (F.Success("Initialization successfully"), B.childrens && B.childrens.length > 0 && (u.value = B.childrens[0]), l.value = B, f(1)))
                            }
                        } catch (A) {
                            F.Error(A)
                        }
                        E.Close(), c.value = !1
                    }),
                    g = x => T(this, null, function* () {
                        if (x.path == null || x.path == "") {
                            F.Warning("Can't get partition path");
                            return
                        }
                        c.value = !0;
                        const E = F.Loading("Formatting...");
                        try {
                            const A = yield S.Nas.Disk.Partition.Format.POST({
                                path: x.path,
                                uuid: x.uuid,
                                mountPoint: x.mountPoint
                            });
                            if (A != null && A.data) {
                                const {
                                    result: B,
                                    error: $
                                } = A == null ? void 0 : A.data;
                                $ && F.Warning($), B && (F.Success("Formatted successfully"), u.value = B, f(1))
                            }
                        } catch (A) {
                            F.Error(A)
                        }
                        E.Close(), c.value = !1
                    }),
                    k = () => {
                        if (u.value && u.value.mountPoint) {
                            s(u.value.mountPoint);
                            return
                        }
                        F.Warning("Failed to read result")
                    };
                return (x, E) => (i(), M(et, {
                    type: 1
                }, {
                    default: V(() => [D(kt, {
                        name: "rotate",
                        mode: "out-in"
                    }, {
                        default: V(() => {
                            var A;
                            return [p.value == 0 ? (i(), r("form", {
                                key: 0,
                                class: "action format",
                                onSubmit: nt(m, ["prevent"])
                            }, [h0, t("div", x0, [t("div", k0, [w0, e.mount ? (i(), r("div", y0, [t("span", null, "\u3010 " + h(e.mount.total) + " \u3011", 1), t("span", null, h(e.mount.mountPoint || e.mount.path), 1)])) : e.disk ? (i(), r("div", F0, [t("span", null, " \u3010" + h(e.disk.size) + "\u3011 ", 1), t("span", null, h(e.disk.venderModel), 1)])) : C("", !0)]), e.mount ? (i(), r("div", E0, [C0, t("div", $0, h(e.mount.mountPoint || e.mount.path) + " \uFF08" + h(e.mount.total) + "\uFF09 ", 1)])) : C("", !0), t("div", D0, [B0, t("div", Y0, [z(t("select", {
                                "onUpdate:modelValue": E[0] || (E[0] = B => d.value = B),
                                required: "",
                                disabled: e.action == "disk"
                            }, [e.mount != null ? (i(), r("option", S0, "Please select an option")) : C("", !0), z0, e.mount != null ? (i(), r("option", P0, "Use original file system without formatting")) : C("", !0)], 8, A0), [
                                [Q, d.value]
                            ])]), t("div", T0, [d.value == "format" ? (i(), r("p", I0, "Formatted as EXT4 file system, the transfer speed is faster")) : d.value == "default" ? (i(), r("p", L0)) : C("", !0)])])]), t("div", M0, [O0, t("button", {
                                class: "cbi-button cbi-button-remove app-btn app-back",
                                onClick: n,
                                type: "button",
                                disabled: c.value
                            }, "Cancel", 8, N0), t("button", {
                                class: "cbi-button cbi-button-apply app-btn app-next",
                                disabled: c.value
                            }, "Next", 8, q0)])], 40, _0)) : p.value == 1 ? (i(), r("div", V0, [t("div", G0, [j0, R0, l.value ? (i(), r("div", U0, [U(h(l.value.venderModel) + " has been successfully formatted and mount to ", 1), t("a", null, h((A = u.value) == null ? void 0 : A.mountPoint), 1)])) : C("", !0), u.value ? (i(), r("div", W0, [H0, t("a", null, h(u.value.mountPoint), 1)])) : C("", !0), t("div", Z0, [t("button", {
                                class: "cbi-button cbi-button-apply app-btn app-next",
                                type: "button",
                                onClick: k
                            }, h(e.action == "nas" ? "Next" : "Finish"), 1)])])])) : C("", !0)]
                        }),
                        _: 1
                    })]),
                    _: 1
                }))
            }
        });
    var X0 = Y(J0, [
            ["__scopeId", "data-v-3a0bca4c"]
        ]),
        Be = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(X0, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        };
    const Ot = e => (O("data-v-57d4812a"), e = e(), N(), e),
        K0 = ["onSubmit"],
        Q0 = Ot(() => t("div", {
            class: "action-header"
        }, [t("div", {
            class: "action-header_title"
        }, "Mount Disk Configuration")], -1)),
        tu = {
            class: "action-body"
        },
        eu = {
            class: "disk-info"
        },
        au = Ot(() => t("div", {
            class: "disk-info_icon"
        }, [t("svg", {
            t: "1642589762094",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "11301",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M899.892468 123.889088c0-44.342099-36.286708-80.620486-80.624646-80.620486H204.728017C160.385918 43.268602 124.107532 79.546988 124.107532 123.889088v802.847056c0 44.342099 36.278386 80.620486 80.620485 80.620486h614.539805c44.337938 0 80.624646-36.278386 80.624646-80.620486V123.889088z",
            fill: "#D0D0DB",
            "p-id": "11302"
        }), t("path", {
            d: "M169.8768 977.7772V174.930143c0-44.342099 36.278386-80.620486 80.620486-80.620485h614.539804c9.936092 0 19.426974 1.905666 28.239639 5.23434-11.525534-30.507298-40.996782-52.389169-75.398629-52.389169H203.342457c-44.342099 0-80.620486 36.278386-80.620486 80.620486v802.851217c0 34.410168 21.881871 63.873094 52.385008 75.381985A79.730065 79.730065 0 0 1 169.8768 977.7772z",
            fill: "#FFFFFF",
            "p-id": "11303"
        }), t("path", {
            d: "M820.657543 40.497481H206.117739c-44.342099 0-80.620486 36.278386-80.620486 80.620485v802.847057c0 44.342099 36.278386 80.620486 80.620486 80.620486h614.539804c44.337938 0 80.624646-36.278386 80.624647-80.620486V121.117966c0-44.342099-36.286708-80.620486-80.624647-80.620485z m19.60173 828.785749c0 40.846992-33.43237 74.279362-74.287684 74.279361H199.780776c-40.855313 0-74.279362-33.424048-74.279362-74.279361V129.593603c0-40.855313 33.424048-74.279362 74.279362-74.279362h566.203296c40.842831 0 74.283522 33.424048 74.283522 74.279362l-0.008321 739.689627z",
            fill: "#6E6E96",
            "p-id": "11304"
        }), t("path", {
            d: "M815.106979 1024H200.567175C146.933914 1024 103.303319 980.369405 103.303319 926.736144V123.889088C103.303319 70.255827 146.933914 26.625232 200.567175 26.625232h614.539804c53.633261 0 97.268017 43.630595 97.268017 97.263856v802.847056c0 53.633261-43.634756 97.263856-97.268017 97.263856zM200.567175 59.911972C165.287391 59.911972 136.590059 88.609303 136.590059 123.889088v802.847056c0 35.279784 28.697331 63.977115 63.977116 63.977115h614.539804c35.279784 0 63.981276-28.697331 63.981276-63.977115V123.889088c0-35.279784-28.701492-63.977115-63.981276-63.977116H200.567175z",
            fill: "#6E6E96",
            "p-id": "11305"
        }), t("path", {
            d: "M301.946104 941.515457h429.985632v65.841173H301.946104z",
            fill: "#8A8AA1",
            "p-id": "11306"
        }), t("path", {
            d: "M731.931736 1024H301.946104a16.64337 16.64337 0 0 1-16.64337-16.64337V941.515457a16.64337 16.64337 0 0 1 16.64337-16.64337h429.985632a16.64337 16.64337 0 0 1 16.64337 16.64337v65.841173a16.64337 16.64337 0 0 1-16.64337 16.64337z m-413.342262-33.286741h396.698892v-32.554432H318.589474v32.554432z",
            fill: "#6E6E96",
            "p-id": "11307"
        }), t("path", {
            d: "M337.230049 960.318304h20.804213v47.038326h-20.804213zM386.565159 960.318304h20.804213v47.038326h-20.804213zM435.891948 960.318304h20.804213v47.038326h-20.804213zM485.231219 960.318304h20.804213v47.038326h-20.804213zM534.558008 960.318304h20.804213v47.038326h-20.804213zM583.897279 960.318304h20.804213v47.038326h-20.804213zM633.224068 960.318304h20.804213v47.038326h-20.804213zM682.563339 960.318304h20.804213v47.038326h-20.804213z",
            fill: "#FFE599",
            "p-id": "11308"
        }), t("path", {
            d: "M219.153659 140.794591m-26.874883 0a26.874882 26.874882 0 1 0 53.749765 0 26.874882 26.874882 0 1 0-53.749765 0Z",
            fill: "#ADADD1",
            "p-id": "11309"
        }), t("path", {
            d: "M219.153659 184.312843c-23.995579 0-43.518252-19.522673-43.518253-43.518252s19.522673-43.518252 43.518253-43.518253 43.518252 19.522673 43.518252 43.518253-19.522673 43.518252-43.518252 43.518252z m0-53.749764c-5.642103 0-10.231512 4.589409-10.231512 10.231512s4.589409 10.231512 10.231512 10.231512 10.231512-4.589409 10.231511-10.231512-4.589409-10.231512-10.231511-10.231512z",
            fill: "#6E6E96",
            "p-id": "11310"
        }), t("path", {
            d: "M801.28466 140.794591m-26.870721 0a26.870721 26.870721 0 1 0 53.741442 0 26.870721 26.870721 0 1 0-53.741442 0Z",
            fill: "#ADADD1",
            "p-id": "11311"
        }), t("path", {
            d: "M801.28466 184.308683c-23.995579 0-43.514092-19.518512-43.514091-43.514092s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514092z m0-53.741443c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
            fill: "#6E6E96",
            "p-id": "11312"
        }), t("path", {
            d: "M801.280499 905.23291m-26.870721 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
            fill: "#ADADD1",
            "p-id": "11313"
        }), t("path", {
            d: "M801.280499 948.747001c-23.995579 0-43.514092-19.518512-43.514091-43.514091s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
            fill: "#6E6E96",
            "p-id": "11314"
        }), t("path", {
            d: "M219.153659 905.23291m-26.870722 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
            fill: "#ADADD1",
            "p-id": "11315"
        }), t("path", {
            d: "M219.153659 948.747001c-23.995579 0-43.514092-19.518512-43.514092-43.514091s19.518512-43.514092 43.514092-43.514092 43.514092 19.518512 43.514091 43.514092-19.522673 43.514092-43.514091 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
            fill: "#6E6E96",
            "p-id": "11316"
        }), t("path", {
            d: "M520.972857 777.43263c-142.542145 0-258.508988-115.971004-258.508988-258.52147a16.64337 16.64337 0 0 1 33.28674 0c0 124.19699 101.033579 225.23473 225.222248 225.23473s225.222248-101.03774 225.222248-225.23473c0-124.188668-101.033579-225.218087-225.222248-225.218087a16.64337 16.64337 0 0 1 0-33.286741c142.542145 0 258.508988 115.966843 258.508988 258.504828 0 142.550466-115.966843 258.521471-258.508988 258.52147z",
            fill: "#6E6E96",
            "p-id": "11317"
        }), t("path", {
            d: "M520.968696 518.919481m-83.312551 0a83.312551 83.312551 0 1 0 166.625102 0 83.312551 83.312551 0 1 0-166.625102 0Z",
            fill: "#A9A9BA",
            "p-id": "11318"
        }), t("path", {
            d: "M520.968696 618.875402c-55.114521 0-99.955921-44.83724-99.955921-99.95176 0-55.118682 44.8414-99.955921 99.955921-99.955921s99.95176 44.8414 99.95176 99.955921c0 55.11036-44.83724 99.95176-99.95176 99.95176z m0-166.625101c-36.761044 0-66.669181 29.908136-66.66918 66.66918s29.908136 66.66502 66.66918 66.66502 66.66502-29.908136 66.66502-66.66502c0-36.761044-29.903976-66.669181-66.66502-66.66918z",
            fill: "#6E6E96",
            "p-id": "11319"
        }), t("path", {
            d: "M301.946104 941.515457h429.985632v36.977408H301.946104z",
            fill: "#6E6E96",
            "p-id": "11320"
        })])], -1)),
        ou = {
            key: 0,
            class: "disk-info_mount-name"
        },
        nu = {
            key: 1,
            class: "disk-info_mount-name"
        },
        iu = {
            key: 0,
            class: "label-item"
        },
        ru = Ot(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "Target partition")], -1)),
        su = {
            class: "label-item_path"
        },
        du = {
            class: "label-item"
        },
        uu = Ot(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "Mount point")], -1)),
        lu = {
            class: "label-item_value"
        },
        cu = {
            class: "action-footer"
        },
        pu = Ot(() => t("div", {
            class: "auto"
        }, null, -1)),
        fu = ["disabled"],
        mu = ["disabled"],
        bu = {
            key: 1,
            class: "action result"
        },
        vu = {
            class: "action-body"
        },
        gu = Ot(() => t("div", {
            class: "action-body_icon"
        }, [t("svg", {
            t: "1642063181211",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "5062",
            width: "128",
            height: "128",
            "data-v-cda444e0": ""
        }, [t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063",
            "data-v-cda444e0": ""
        })])], -1)),
        _u = Ot(() => t("div", {
            class: "action-body_msg"
        }, "Mounted Successfully", -1)),
        hu = {
            key: 0,
            class: "action-body_info"
        },
        xu = {
            class: "btns"
        },
        ku = P({
            props: {
                action: String,
                disk: {
                    type: Object,
                    required: !0
                },
                mount: {
                    type: Object
                },
                Close: {
                    type: Function
                },
                Cancel: {
                    type: Function
                },
                Next: {
                    type: Function
                }
            },
            setup(e) {
                var _;
                const a = e,
                    o = () => {
                        a.Close && a.Close()
                    },
                    n = v => {
                        v.preventDefault(), a.Cancel && a.Cancel(), o()
                    },
                    s = v => {
                        a.Next && a.Next(v), o()
                    },
                    c = y(!1),
                    p = y(0),
                    f = y("/mnt/data_" + ((_ = a == null ? void 0 : a.mount) == null ? void 0 : _.name)),
                    d = v => {
                        p.value = v
                    };
                y(a.mount ? "" : "format"), y();
                const l = y(),
                    u = () => T(this, null, function* () {
                        const v = a.mount;
                        if (v == null) {
                            F.Warning("Can't get partition");
                            return
                        }
                        if (v.path == null || v.path == "") {
                            F.Warning("Can't get partition path");
                            return
                        }
                        if (v.uuid == null || v.uuid == "") {
                            F.Warning("The partition id cannot be obtained");
                            return
                        }
                        c.value = !0;
                        const g = F.Loading("Mounting...");
                        try {
                            const k = yield S.Nas.Disk.Partition.Mount.POST({
                                path: v.path,
                                uuid: v.uuid,
                                mountPoint: f.value
                            });
                            if (k != null && k.data) {
                                const {
                                    result: x,
                                    error: E
                                } = k == null ? void 0 : k.data;
                                E && F.Warning(E), x && (F.Success("Mounted successfully"), l.value = x, d(1))
                            }
                        } catch (k) {
                            F.Error(k)
                        }
                        g.Close(), c.value = !1
                    }),
                    m = () => {
                        if (l.value && l.value.mountPoint) {
                            s(l.value.mountPoint);
                            return
                        }
                        F.Warning("Failed to read result")
                    },
                    b = () => {};
                return (v, g) => (i(), M(et, {
                    type: 1
                }, {
                    default: V(() => [D(kt, {
                        name: "rotate",
                        mode: "out-in"
                    }, {
                        default: V(() => {
                            var k, x;
                            return [p.value == 0 ? (i(), r("form", {
                                key: 0,
                                class: "action format",
                                onSubmit: nt(b, ["prevent"])
                            }, [Q0, t("div", tu, [t("div", eu, [au, e.mount ? (i(), r("div", ou, [t("span", null, " \u3010" + h(e.mount.total) + "\u3011 ", 1), t("span", null, h(e.mount.mountPoint), 1)])) : e.disk ? (i(), r("div", nu, [t("span", null, " \u3010" + h(e.disk.size) + "\u3011 ", 1), t("span", null, h(e.disk.venderModel), 1)])) : C("", !0)]), e.mount ? (i(), r("div", iu, [ru, t("div", su, h(e.mount.path) + " \uFF08" + h(e.mount.total) + "\uFF0C " + h((x = (k = e.mount) == null ? void 0 : k.filesystem) == null ? void 0 : x.toUpperCase()) + "\uFF09", 1)])) : C("", !0), t("div", du, [uu, t("div", lu, [z(t("input", {
                                type: "text",
                                "onUpdate:modelValue": g[0] || (g[0] = E => f.value = E)
                            }, null, 512), [
                                [W, f.value, void 0, {
                                    trim: !0
                                }]
                            ])])])]), t("div", cu, [pu, t("button", {
                                class: "cbi-button cbi-button-remove app-btn app-back",
                                disabled: c.value,
                                onClick: n
                            }, "Cancel", 8, fu), t("button", {
                                class: "cbi-button cbi-button-apply app-btn app-next",
                                onClick: u,
                                type: "button",
                                disabled: c.value
                            }, "Next", 8, mu)])], 40, K0)) : p.value == 1 ? (i(), r("div", bu, [t("div", vu, [gu, _u, l.value ? (i(), r("div", hu, [U("Partition " + h(l.value.path) +" was successful mounted to ", 1), t("a", null, h(l.value.mountPoint), 1)])) : C("", !0), t("div", xu, [t("button", {
                                class: "cbi-button cbi-button-apply app-btn app-next",
                                type: "button",
                                onClick: m
                            }, h(e.action == "nas" ? "Finish" : "Next"), 1)])])])) : C("", !0)]
                        }),
                        _: 1
                    })]),
                    _: 1
                }))
            }
        });
    var wu = Y(ku, [
            ["__scopeId", "data-v-57d4812a"]
        ]),
        sa = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(wu, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        };
    const da = e => (O("data-v-31be4af0"), e = e(), N(), e),
        yu = {
            class: "disk-content"
        },
        Fu = {
            class: "disk-item"
        },
        Eu = {
            class: "disk-item_name"
        },
        Cu = {
            key: 0
        },
        $u = {
            key: 1
        },
        Du = {
            key: 2
        },
        Bu = {
            class: "disk_value"
        },
        Yu = {
            key: 0,
            class: "disk-item_value"
        },
        Au = {
            class: "value-data"
        },
        Su = {
            key: 1,
            class: "disk-item_value"
        },
        zu = {
            key: 0,
            class: "disk-item"
        },
        Pu = {
            class: "disk-item_name"
        },
        Tu = ["href"],
        Iu = {
            class: "disk_status"
        },
        Lu = {
            class: "disk_status_item"
        },
        Mu = {
            key: 0,
            class: "tooltip-trigger disk_tip"
        },
        Ou = da(() => t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("div", {
            class: "disk_dir_tip"
        }, "\u5F53\u524D\u78C1\u76D8\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EF\u80FD\u5BFC\u81F4\u65E0\u6CD5\u5199\u5165\u6570\u636E")], -1)),
        Nu = {
            class: "disk_status_item"
        },
        qu = {
            key: 0,
            class: "tooltip-trigger disk_tip"
        },
        Vu = da(() => t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("span", {
            class: "disk_dir_tip"
        }, "\u5F53\u524D\u78C1\u76D8\u786C\u76D8\u683C\u5F0F\u4E3ANTFS\uFF0C\u53EF\u80FD\u5BFC\u81F4\u786C\u76D8\u51FA\u73B0\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u5EFA\u8BAE\u683C\u5F0F\u5316\u6210EXT4\u6587\u4EF6\u7CFB\u7EDF")], -1)),
        Gu = P({
            props: {
                part: {
                    type: Object,
                    required: !0
                },
                disk: {
                    type: Object,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = R(() => a.part.filesystem == "No FileSystem"),
                    n = R(() => o.value || !a.part.isSystemRoot && a.part.mountPoint && (a.part.isReadOnly || a.part.filesystem == "ntfs")),
                    s = function () {
                        Be({
                            action: "disk",
                            disk: a.disk,
                            mount: a.part,
                            Cancel: () => {},
                            Next: l => {
                                location.reload()
                            }
                        })
                    },
                    c = () => {
                        sa({
                            action: "nas",
                            disk: a.disk,
                            mount: a.part,
                            Cancel: () => {},
                            Next: () => {
                                location.reload()
                            }
                        })
                    },
                    p = () => T(this, null, function* () {
                        const l = F.Loading("\u5904\u7406\u4E2D...");
                        try {
                            const u = yield S.Nas.Disk.InitRest.POST({
                                name: a.disk.name,
                                path: a.disk.path
                            });
                            if (u != null && u.data) {
                                const {
                                    result: m,
                                    error: b
                                } = u == null ? void 0 : u.data;
                                b && F.Warning(b), m && (F.Success("\u6302\u8F7D\u6210\u529F"), location.reload())
                            }
                        } catch (u) {
                            F.Error(u)
                        }
                        l.Close()
                    }),
                    f = R(() => a.part.filesystem == "Free Space"),
                    d = R(() => {
                        const l = a.part.mountPoint ? a.part.mountPoint : "";
                        return l.indexOf("/mnt/") == 0 ? "/cgi-bin/luci/admin/services/linkease/file/?path=/" + l.substring(5) : "/cgi-bin/luci/admin/services/linkease/file/?path=/root" + l
                    });
                return (l, u) => {
                    var b;
                    const m = X("progress-item");
                    return i(), r("div", yu, [t("li", Fu, [t("div", Eu, [w(f) ? (i(), r("span", Cu, "Not partitioned")) : (i(), r("span", $u, h(e.part.name) + h(e.part.mountPoint ? "" : w(o) ? "(Unformatted)" : "(No mounted)"), 1)), e.part.isSystemRoot ? (i(), r("span", Du, " (System partition)")) : C("", !0)]), t("div", Bu, [e.part.mountPoint || w(f) ? (i(), r("div", Yu, [t("div", Au, [D(m, {
                        value: w(f) || !e.part.usage ? 0 : e.part.usage,
                        text: w(f) ? "Unpartitioned (" + e.part.total + ")" : e.part.used + "/" + e.part.total,
                        style: {
                            backgroundColor: "#767676"
                        }
                    }, null, 8, ["value", "text"])])])) : w(o) ? C("", !0) : (i(), r("div", Su, [t("div", {
                        class: "value-data buttondiv",
                        onClick: c
                    }, "Manual mount")])), w(f) ? (i(), r("button", {
                        key: 2,
                        class: "cbi-button cbi-button-apply",
                        onClick: p
                    }, "Partition and format")) : w(n) ? (i(), r("button", {
                        key: 3,
                        class: "cbi-button cbi-button-apply",
                        onClick: s
                    }, "Format Partition")) : C("", !0)])]), e.part.mountPoint ? (i(), r("li", zu, [t("span", Pu, [t("a", {
                        href: w(d),
                        target: "_blank"
                    }, h(e.part.mountPoint), 9, Tu)]), t("div", Iu, [t("div", Lu, [t("div", null, "Disk status: " + h(e.part.isReadOnly ? "Read only" : "Read and write"), 1), !e.part.isSystemRoot && e.part.isReadOnly ? (i(), r("div", Mu, [D(gt), Ou])) : C("", !0)]), t("div", Nu, [t("div", null, "Disk format: " + h((b = e.part.filesystem) == null ? void 0 : b.toUpperCase()), 1), e.part.filesystem == "ntfs" ? (i(), r("div", qu, [D(gt), Vu])) : C("", !0)])])])) : C("", !0)])
                }
            }
        });
    var ju = Y(Gu, [
        ["__scopeId", "data-v-31be4af0"]
    ]);
    const ua = e => (O("data-v-5fa713aa"), e = e(), N(), e),
        Ru = {
            key: 0,
            class: "action"
        },
        Uu = {
            class: "title"
        },
        Wu = ua(() => t("div", {
            class: "app-container_info"
        }, [t("span", null, "Partition / Mount point"), t("span", null, "Capacity")], -1)),
        Hu = {
            class: "app-container_body"
        },
        Zu = ua(() => t("div", {
            class: "auto"
        }, null, -1)),
        Ju = P({
            props: {
                disk: {
                    type: Object,
                    required: !0
                },
                Close: {
                    type: Function
                },
                Cancel: {
                    type: Function
                },
                Next: {
                    type: Function
                }
            },
            setup(e) {
                const a = e,
                    o = y(0),
                    n = () => {
                        a.Close && a.Close()
                    },
                    s = c => {
                        c.preventDefault(), a.Cancel && a.Cancel(), n()
                    };
                return (c, p) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => [D(kt, {
                        name: "rotate",
                        mode: "out-in"
                    }, {
                        default: V(() => [o.value == 0 ? (i(), r("div", Ru, [t("h2", Uu, "Partition Information - " + h((e.disk.name || "?") + (e.disk.isSystemRoot ? " (System disk)" : "")), 1), t("ul", null, [t("li", null, [Wu, t("div", Hu, [(i(!0), r(L, null, j(e.disk.childrens, (f, d) => (i(), M(ju, {
                            key: d,
                            part: f,
                            disk: e.disk
                        }, null, 8, ["part", "disk"]))), 128))])])]), t("div", {
                            class: "action-footer"
                        }, [Zu, t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: s,
                            type: "button"
                        }, "Exit")])])) : C("", !0)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var Xu = Y(Ju, [
            ["__scopeId", "data-v-5fa713aa"]
        ]),
        Ku = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(Xu, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.component("progress-item", ta), o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        };
    const fe = e => (O("data-v-eb0dbbd8"), e = e(), N(), e),
        Qu = {
            key: 0,
            class: "disk-item error"
        },
        tl = ["title"],
        el = {
            class: "disk-item_value"
        },
        al = {
            class: "value-data"
        },
        ol = {
            class: "error"
        },
        nl = {
            key: 1,
            class: "disk-item"
        },
        il = ["title"],
        rl = {
            key: 0,
            class: "disk_value"
        },
        sl = fe(() => t("div", {
            class: "value-data"
        }, [t("a", {
            href: "/cgi-bin/luci/admin/nas/smart"
        }, [t("span", {
            class: "error"
        }, " S.M.A.R.T\u5F02\u5E38")])], -1)),
        dl = [sl],
        ul = {
            key: 1,
            class: "disk_value"
        },
        ll = {
            class: "disk-item_value"
        },
        cl = {
            class: "value-data"
        },
        pl = fe(() => t("div", {
            class: "disk-item-tooltip"
        }, [t("span", null, "Only count mounted partitions")], -1)),
        fl = {
            class: "disk_icon"
        },
        ml = {
            key: 0,
            class: "tooltip-trigger"
        },
        bl = {
            class: "disk_tip"
        },
        vl = fe(() => t("div", null, [t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("span", {
            class: "disk_dir_tip"
        }, "Your system space is insufficient. It is detected that your docker root directory is located on system root directory, which may affect the normal operation of the system. Recommended to use Docker migration wizard to migrate docker root directory to an external hard disk.")])], -1)),
        gl = {
            key: 1,
            class: "tooltip-trigger"
        },
        _l = {
            class: "disk_tip"
        },
        hl = fe(() => t("div", null, [t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("span", {
            class: "disk_dir_tip"
        }, "There is an exception in partition, click partition list to view the error")])], -1)),
        xl = {
            key: 2,
            class: "disk-item load"
        },
        kl = ["title"],
        wl = {
            class: "disk_value"
        },
        yl = {
            class: "disk-item_value"
        },
        Fl = {
            class: "value-data"
        },
        El = {
            key: 3,
            class: "disk-item load"
        },
        Cl = ["title"],
        $l = {
            class: "disk_value"
        },
        Dl = {
            key: 0,
            class: "disk-item_value"
        },
        Bl = {
            class: "value-data"
        },
        Yl = {
            key: 1,
            class: "disk-item_value"
        },
        Al = {
            class: "value-data"
        },
        Sl = {
            class: "disk_icon"
        },
        zl = P({
            props: {
                disk: {
                    type: Object,
                    required: !0
                },
                smartWarning: {
                    type: Boolean
                }
            },
            setup(e) {
                const a = e,
                    o = R(() => a.disk.errorInfo ? "error" : a.disk.childrens == null || a.disk.childrens.length == 0 || a.disk.childrens.length == 1 && a.disk.childrens[0].filesystem == "No FileSystem" ? "load" : a.disk.childrens.filter(f => f.mountPoint).length == 0 ? "unmounted" : "success"),
                    n = R(() => {
                        const f = a.disk;
                        let d = f.name;
                        return f.size && (d += `\u3010${f.size}\u3011`), f.venderModel && (d += `(${f.venderModel})`), d
                    }),
                    s = () => {
                        Be({
                            action: "disk",
                            disk: a.disk,
                            Cancel: () => {},
                            Next: () => {
                                location.reload()
                            }
                        })
                    },
                    c = () => {
                        Ku({
                            action: "disk",
                            disk: a.disk,
                            Cancel: () => {},
                            Next: () => {
                                location.reload()
                            }
                        })
                    },
                    p = () => {
                        const f = a.disk,
                            d = f.childrens || [];
                        sa({
                            action: "nas",
                            disk: f,
                            mount: d[0],
                            Cancel: () => {},
                            Next: () => {
                                location.reload()
                            }
                        })
                    };
                return (f, d) => {
                    var u, m, b, _, v;
                    const l = X("progress-item");
                    return w(o) == "error" ? (i(), r("li", Qu, [t("div", {
                        class: "disk-item_name",
                        title: w(n)
                    }, [t("span", null, h(w(n)), 1)], 8, tl), t("div", el, [t("div", al, [t("span", ol, h(e.disk.errorInfo), 1)])])])) : w(o) == "success" ? (i(), r("li", nl, [t("div", {
                        class: "disk-item_name",
                        title: w(n)
                    }, [t("span", null, h(w(n)), 1)], 8, il), e.disk.smartWarning && e.smartWarning ? (i(), r("div", rl, dl)) : (i(), r("div", ul, [t("div", ll, [t("div", cl, [D(l, {
                        value: e.disk.usage || 0,
                        text: `${e.disk.used}/${e.disk.total}`,
                        style: {
                            backgroundColor: "#767676"
                        }
                    }, null, 8, ["value", "text"])]), pl]), t("div", fl, [e.disk.isDockerRoot && e.disk.isSystemRoot && e.disk.usage && e.disk.usage >= 90 ? (i(), r("span", ml, [t("span", bl, [D(gt)]), vl])) : C("", !0), !e.disk.isSystemRoot && (((u = e.disk.childrens) == null ? void 0 : u.filter(g => g.isReadOnly || g.filesystem == "ntfs").length) || 0) > 0 ? (i(), r("span", gl, [t("span", _l, [D(gt)]), hl])) : C("", !0), !e.disk.isSystemRoot && (((m = e.disk.childrens) == null ? void 0 : m.filter(g => g.isReadOnly || g.filesystem == "ntfs").length) || 0) > 0 ? (i(), r("span", {
                        key: 2,
                        class: "disk_infoicon",
                        onClick: d[0] || (d[0] = g => s())
                    }, [D(g0)])) : C("", !0), t("span", {
                        class: "disk_infoicon",
                        onClick: d[1] || (d[1] = g => c())
                    }, [D(Ue)])])]))])) : w(o) == "load" ? (i(), r("li", xl, [t("div", {
                        class: "disk-item_name",
                        title: w(n)
                    }, [t("span", null, h(w(n)), 1)], 8, kl), t("div", wl, [t("div", yl, [t("div", Fl, [t("button", {
                        style: {
                            backgroundColor: "#767676",
                            color: "#fff",
                            textAlign: "center"
                        },
                        onClick: d[2] || (d[2] = g => s())
                    }, "Format and Mount")])])])])) : w(o) == "unmounted" ? (i(), r("li", El, [t("div", {
                        class: "disk-item_name",
                        title: w(n)
                    }, [t("span", null, h(w(n)), 1)], 8, Cl), t("div", $l, [((b = e.disk.childrens) == null ? void 0 : b.length) == 1 ? (i(), r("div", Dl, [t("div", Bl, [t("button", {
                        style: {
                            backgroundColor: "#53C31B",
                            color: "#fff",
                            textAlign: "center"
                        },
                        onClick: d[3] || (d[3] = g => p())
                    }, "Manual Mount")])])) : C("", !0), (((_ = e.disk.childrens) == null ? void 0 : _.length) || 0) > 1 ? (i(), r("div", Yl, [t("div", Al, [t("button", {
                        onClick: d[4] || (d[4] = g => c())
                    }, "Manual Mount")])])) : C("", !0), t("div", Sl, [(((v = e.disk.childrens) == null ? void 0 : v.length) || 0) > 1 ? (i(), r("span", {
                        key: 0,
                        class: "disk_infoicon",
                        onClick: d[5] || (d[5] = g => c())
                    }, [D(Ue)])) : C("", !0)])])])) : C("", !0)
                }
            }
        });
    var we = Y(zl, [
        ["__scopeId", "data-v-eb0dbbd8"]
    ]);
    const ee = e => (O("data-v-40555016"), e = e(), N(), e),
        Pl = {
            class: "app-container"
        },
        Tl = {
            class: "app-container_title"
        },
        Il = {
            class: "disk_info"
        },
        Ll = U("Disk"),
        Ml = {
            class: "app-container_tool"
        },
        Ol = {
            class: "more_icon",
            title: "View disk management information"
        },
        Nl = {
            class: "DeviceBlock"
        },
        // ql = ee(() => t("ul", null, [t("li", null, [t("a", {
        //     href: "/cgi-bin/luci/admin/nas/raid"
        // }, "RAID\u7BA1\u7406")]), t("li", null, [t("a", {
        //     href: "/cgi-bin/luci/admin/nas/smart"
        // }, "S.M.A.R.T.")]), t("li", null, [t("a", {
        //     href: "/cgi-bin/luci/admin/system/diskman"
        // }, "\u78C1\u76D8\u7BA1\u7406")]), t("li", null, [t("a", {
        //     href: "/cgi-bin/luci/admin/system/mounts"
        // }, "\u6302\u8F7D\u70B9")])], -1)),
        ql = ee(() => t("ul", null, [t("li", null, [t("a", {
            href: "/cgi-bin/luci/admin/nas/smart"
        }, "S.M.A.R.T")]), t("li", null, [t("a", {
            href: "/cgi-bin/luci/admin/system/diskman"
        }, "Disk Manager")]), t("li", null, [t("a", {
            href: "/cgi-bin/luci/admin/system/mounts"
        }, "Mount Points")])], -1)),
        Vl = {
            key: 0
        },
        Gl = {
            class: "disk_loading_icon"
        },
        jl = ee(() => t("span", {
            class: "disk_loading_info"
        }, "Getting disk information...", -1)),
        Rl = {
            key: 1
        },
        Ul = ee(() => t("div", {
            class: "app-container_info"
        }, [t("span", null, "System Root Directory")], -1)),
        Wl = {
            class: "app-container_body"
        },
        Hl = {
            key: 2
        },
        Zl = ee(() => t("div", {
            class: "app-container_info"
        }, [t("span", null, "Mounted Disk")], -1)),
        Jl = {
            class: "app-container_body"
        },
        Xl = {
            key: 3
        },
        Kl = ee(() => t("div", {
            class: "app-container_info"
        }, [t("span", null, "RAID\u8BBE\u5907")], -1)),
        Ql = {
            class: "app-container_body"
        },
        t1 = P({
            setup(e) {
                const a = y(!1),
                    o = it({
                        disks: null,
                        raidList: null
                    }),
                    n = () => {
                        S.Nas.Disk.Status.GET().then(f => {
                            var d;
                            if ((d = f == null ? void 0 : f.data) != null && d.result) {
                                const l = f.data.result;
                                o.disks = l.disks || []
                            }
                        })
                    };
                (() => T(this, null, function* () {
                    try {
                        const f = yield S.Raid.List.GET();
                        if (f != null && f.data) {
                            const {
                                success: d,
                                error: l,
                                result: u
                            } = f.data;
                            if (u && (o.raidList = u.disks || []), l) throw l
                        }
                    } catch (f) {
                        console.log(f)
                    }
                }))(), n();
                const c = () => {
                        a.value = !a.value
                    },
                    p = () => {
                        location.href = "/cgi-bin/luci/admin/nas/tinyfilemanager"
                    };
                return (f, d) => {
                    var m, b;
                    const l = X("GlHelp"),
                        u = X("icon-loading");
                    return i(), r("div", Pl, [t("ul", null, [t("li", null, [t("div", Tl, [t("span", Il, [Ll, D(l, {
                        type: "disk"
                    })]), t("div", Ml, [t("div", {
                        class: "app-container_configure",
                        onClick: p
                    }, "File Manager"), t("span", Ol, [D($t, {
                        onClick: c
                    })])]), z(t("div", Nl, [t("div", {
                        class: "menu_background",
                        onClick: c
                    }), ql], 512), [
                        [wt, a.value]
                    ])])]), !w(o).disks && !w(o).raidList ? (i(), r("li", Vl, [t("div", Gl, [D(u, {
                        size: 38,
                        color: "currentColor"
                    }), jl])])) : C("", !0), w(o).disks ? (i(), r("li", Rl, [Ul, t("div", Wl, [(i(!0), r(L, null, j((m = w(o).disks) == null ? void 0 : m.filter(_ => _.isSystemRoot), (_, v) => (i(), M(we, {
                        key: v,
                        disk: _
                    }, null, 8, ["disk"]))), 128))])])) : C("", !0), w(o).disks ? (i(), r("li", Hl, [Zl, t("div", Jl, [(i(!0), r(L, null, j((b = w(o).disks) == null ? void 0 : b.filter(_ => !_.isSystemRoot), (_, v) => (i(), M(we, {
                        key: v,
                        disk: _,
                        smartWarning: !0
                    }, null, 8, ["disk"]))), 128))])])) : C("", !0), w(o).raidList && w(o).raidList.length > 0 ? (i(), r("li", Xl, [Kl, t("div", Ql, [(i(!0), r(L, null, j(w(o).raidList, (_, v) => (i(), M(we, {
                        key: v,
                        disk: _
                    }, null, 8, ["disk"]))), 128))])])) : C("", !0)])])
                }
            }
        });
    var e1 = Y(t1, [
        ["__scopeId", "data-v-40555016"]
    ]);
    const la = e => (O("data-v-13ca629c"), e = e(), N(), e),
        a1 = {
            class: "app-container_samba"
        },
        o1 = {
            key: 0,
            class: "sambas-item"
        },
        n1 = la(() => t("div", {
            class: "sambas-item_name"
        }, [t("span", null, "\u5F53\u524D\u72B6\u6001:")], -1)),
        i1 = {
            class: "sambas-item_value"
        },
        r1 = la(() => t("li", {
            class: "sambas-item"
        }, [t("div", {
            class: "sambas-item_name tit"
        }, [t("span", null, "\u5730\u5740")]), t("div", {
            class: "sambas-item_value tit"
        }, [t("span", null, "\u76EE\u5F55")])], -1)),
        s1 = {
            class: "samba-item"
        },
        d1 = {
            class: "samba-item_name"
        },
        u1 = ["title"],
        l1 = ["href"],
        c1 = P({
            props: {
                sambas: {
                    type: Array
                }
            },
            setup(e) {
                const a = window.location.hostname;
                return (o, n) => {
                    var s;
                    return i(), r("ul", a1, [e.sambas ? (i(), r("li", o1, [n1, t("div", i1, [t("span", null, h((s = e.sambas) != null && s.length ? "\u5DF2\u542F\u7528" : "\u672A\u542F\u7528"), 1)])])) : C("", !0), r1, (i(!0), r(L, null, j(e.sambas, c => (i(), r("li", s1, [t("div", d1, [t("span", null, "smb://" + h(w(a)) + "/" + h(c.shareName), 1)]), t("div", {
                        class: "samba-item_value",
                        title: c.path
                    }, [t("a", {
                        target: "_blank",
                        href: "/cgi-bin/luci/admin/services/linkease/file/?path=/root" + c.path
                    }, h(c.path), 9, l1)], 8, u1)]))), 256))])
                }
            }
        });
    var p1 = Y(c1, [
        ["__scopeId", "data-v-13ca629c"]
    ]);
    const me = e => (O("data-v-b4608492"), e = e(), N(), e),
        f1 = {
            class: "webdav-item"
        },
        m1 = me(() => t("div", {
            class: "webdav-item_name"
        }, [t("span", null, "\u5F53\u524D\u72B6\u6001:")], -1)),
        b1 = {
            class: "webdav-item_value"
        },
        v1 = {
            key: 0,
            class: "webdav-item"
        },
        g1 = me(() => t("div", {
            class: "webdav-item_name"
        }, [t("span", null, "\u6302\u8F7D\u8DEF\u5F84:")], -1)),
        _1 = {
            class: "webdav-item_value"
        },
        h1 = ["href"],
        x1 = {
            key: 1,
            class: "webdav-item"
        },
        k1 = me(() => t("div", {
            class: "webdav-item_name"
        }, [t("span", null, "\u670D\u52A1\u8DEF\u5F84:")], -1)),
        w1 = {
            class: "webdav-item_value"
        },
        y1 = ["href"],
        F1 = {
            key: 2,
            class: "webdav-item"
        },
        E1 = me(() => t("div", {
            class: "webdav-item_name"
        }, [t("span", null, "\u8D26\u53F7:")], -1)),
        C1 = {
            class: "webdav-item_value"
        },
        $1 = P({
            props: {
                webdav: {
                    type: Object
                }
            },
            setup(e) {
                const a = e,
                    o = R(() => {
                        var n;
                        return `http://${location.hostname}:${(n=a.webdav)==null?void 0:n.port}`
                    });
                return (n, s) => {
                    var c, p, f, d, l, u, m;
                    return i(), r(L, null, [t("li", f1, [m1, t("div", b1, [t("span", null, h((c = e.webdav) != null && c.path ? "\u5DF2\u542F\u7528" : "\u672A\u542F\u7528"), 1)])]), (p = e.webdav) != null && p.path ? (i(), r("li", v1, [g1, t("div", _1, [t("a", {
                        target: "_blank",
                        href: "/cgi-bin/luci/admin/services/linkease/file/?path=/root" + ((f = e.webdav) == null ? void 0 : f.path)
                    }, h((d = e.webdav) == null ? void 0 : d.path), 9, h1)])])) : C("", !0), (l = e.webdav) != null && l.port ? (i(), r("li", x1, [k1, t("div", w1, [t("a", {
                        href: w(o),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, h(w(o)), 9, y1)])])) : C("", !0), (u = e.webdav) != null && u.username ? (i(), r("li", F1, [E1, t("div", C1, [t("span", null, h((m = e.webdav) == null ? void 0 : m.username), 1)])])) : C("", !0)], 64)
                }
            }
        });
    var D1 = Y($1, [
        ["__scopeId", "data-v-b4608492"]
    ]);
    const Ye = e => (O("data-v-4a3b6e0a"), e = e(), N(), e),
        B1 = {
            class: "disk-item"
        },
        Y1 = Ye(() => t("div", {
            class: "disk-item_icon"
        }, [t("svg", {
            t: "1642563338465",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2216",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M998.4 711.68l-119.467-512c-6.826-42.667-42.666-75.093-87.04-76.8H232.107c-44.374 1.707-80.214 35.84-87.04 78.507L25.6 711.68c-5.12 13.653-6.827 29.013-6.827 42.667 0 76.8 63.147 139.946 141.654 139.946H865.28c78.507 0 141.653-63.146 141.653-139.946 0-13.654-3.413-29.014-8.533-42.667zM394.24 366.933c1.707-51.2 56.32-92.16 124.587-92.16S640 315.733 640 365.227c44.373-1.707 81.92 23.893 83.627 58.026s-34.134 63.147-78.507 64.854h-6.827l-245.76 1.706c-44.373 0-80.213-27.306-80.213-59.733 0-35.84 37.547-63.147 81.92-63.147z m471.04 459.094H160.427c-39.254 0-69.974-30.72-69.974-69.974s32.427-69.973 69.974-69.973H865.28c39.253 0 69.973 30.72 69.973 69.973 1.707 37.547-30.72 69.974-69.973 69.974z m-35.84-92.16c-11.947 0-22.187 8.533-23.893 20.48 0 11.946 8.533 22.186 20.48 23.893h3.413c11.947 0 22.187-10.24 22.187-22.187 0-13.653-8.534-22.186-22.187-22.186z m-46.08 22.186c0-25.6 20.48-46.08 46.08-46.08s46.08 20.48 46.08 46.08-20.48 46.08-46.08 46.08-46.08-20.48-46.08-46.08z",
            "p-id": "2217"
        })])], -1)),
        A1 = {
            class: "disk-item_f"
        },
        S1 = {
            class: "disk-item_venderModel"
        },
        z1 = {
            class: "disk-item_used"
        },
        P1 = Ye(() => t("div", {
            class: "auto"
        }, null, -1)),
        T1 = {
            class: "disk-item-r"
        },
        I1 = {
            class: "disk-children"
        },
        L1 = ["onClick"],
        M1 = Ye(() => t("div", {
            class: "disk-item_icon"
        }, [t("svg", {
            t: "1642563581459",
            class: "icon",
            viewBox: "0 0 1228 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "7132",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M525.2096 145.3568c1.9968-45.568-35.6864-99.1232-57.4976-99.1232H57.4976C15.872 79.9232 17.8176 145.408 17.8176 145.408h507.392z",
            fill: "#ECC049",
            "p-id": "7133"
        }), t("path", {
            d: "M21.8112 143.36L19.8144 825.1392c0 75.3152 75.3152 152.576 150.6304 152.576h887.9104c75.264 0 150.6304-75.264 150.6304-152.576V297.984c0-75.264-75.3152-152.576-150.6304-152.576h-434.0224L21.8112 143.36z",
            fill: "#FFD658",
            "p-id": "7134"
        })])], -1)),
        O1 = {
            key: 0
        },
        N1 = {
            key: 1
        },
        q1 = P({
            props: {
                disk: {
                    type: Object,
                    required: !0
                },
                currDisk: {
                    type: Object
                },
                currMountPoint: {
                    type: Object
                },
                onDisk: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                var s, c;
                const a = e,
                    o = y(!1);
                a.currDisk != null && ((s = a.currDisk) == null ? void 0 : s.venderModel) == ((c = a.disk) == null ? void 0 : c.venderModel) && (o.value = !0);
                const n = p => {
                    o.value = !o.value, a.onDisk(p, null)
                };
                return (p, f) => {
                    var d;
                    return i(), r("ul", B1, [t("li", {
                        class: ot(["disk-info", {
                            on: e.disk.venderModel == ((d = e.currDisk) == null ? void 0 : d.venderModel),
                            nopoint: e.disk.childrens == null || e.disk.childrens.length == 0
                        }]),
                        onClick: f[0] || (f[0] = l => n(e.disk))
                    }, [Y1, t("div", A1, [t("div", S1, h(e.disk.venderModel), 1), t("div", z1, h(e.disk.used) + "/" + h(e.disk.size), 1)]), P1, t("div", T1, h(e.disk.path), 1)], 2), z(t("div", I1, [(i(!0), r(L, null, j(e.disk.childrens, l => {
                        var u, m;
                        return i(), r("li", {
                            class: ot(["disk-children_item", {
                                on: l.uuid == ((u = e.currMountPoint) == null ? void 0 : u.uuid) && l.path == ((m = e.currMountPoint) == null ? void 0 : m.path)
                            }]),
                            onClick: b => e.onDisk(e.disk, l)
                        }, [M1, l.mountPoint ? (i(), r("span", O1, " \u3010" + h(l.filesystem) + "\u3011 " + h(l.mountPoint) + " \uFF08" + h(l.used) + "/" + h(l.total) + "\uFF09 [" + h(l.uuid) + "] ", 1)) : (i(), r("span", N1, " \u3010" + h(l.filesystem) + "\u3011 " + h(l.mountPoint || l.path || "\u672A\u6302\u8F7D\u78C1\u76D8") + " [" + h(l.uuid) + "] ", 1))], 10, L1)
                    }), 256))], 512), [
                        [wt, o.value]
                    ])])
                }
            }
        });
    var We = Y(q1, [
        ["__scopeId", "data-v-4a3b6e0a"]
    ]);
    const Ae = e => (O("data-v-12d0f96b"), e = e(), N(), e),
        V1 = {
            class: "action list"
        },
        G1 = Ae(() => t("div", {
            class: "action-header"
        }, [t("div", {
            class: "action-header_title"
        }, "\u8BF7\u9009\u62E9\u4E00\u4E2A\u786C\u76D8\u6216\u5206\u533A")], -1)),
        j1 = {
            class: "action-body"
        },
        R1 = {
            class: "disk-list"
        },
        U1 = Ae(() => t("div", {
            class: "action-msg"
        }, [t("span", null, [U(" \u60F3\u8981\u66F4\u7CBE\u786E\u7684\u914D\u7F6E\uFF1F\u8BF7\u524D\u5F80 "), t("a", {
            href: "/cgi-bin/luci/admin/system/diskman"
        }, "\u9AD8\u7EA7\u8BBE\u7F6E")])], -1)),
        W1 = Ae(() => t("div", {
            class: "auto"
        }, null, -1)),
        H1 = P({
            props: {
                Cancel: {
                    type: Function
                },
                Next: {
                    type: Function
                },
                Close: {
                    type: Function
                }
            },
            setup(e) {
                const a = e,
                    o = y(!0),
                    n = it({
                        disks: [],
                        raids: []
                    });
                (() => T(this, null, function* () {
                    const b = yield Promise.all([S.Nas.Disk.Status.GET(), S.Raid.List.GET()]);
                    try {
                        if (b[0]) {
                            const _ = b[0];
                            _ != null && _.data.result && (n.disks = (_ == null ? void 0 : _.data.result.disks) || [])
                        }
                        if (b[1]) {
                            const _ = b[1];
                            _.data.result && (n.raids = _.data.result.disks || [])
                        }
                    } catch (_) {
                        F.Warning(_)
                    }
                }))();
                const c = y(),
                    p = y(),
                    f = (b, _) => {
                        c.value = b, p.value = _
                    },
                    d = () => {
                        a.Close && a.Close()
                    },
                    l = () => {
                        a.Cancel && a.Cancel(), d()
                    },
                    u = b => {
                        a.Next && a.Next(b), d()
                    },
                    m = () => {
                        if (c.value == null) {
                            F.Warning("\u8BF7\u9009\u62E9\u76EE\u6807\u786C\u76D8");
                            return
                        }
                        if (c.value.childrens != null && c.value.childrens.length > 0 && p.value == null) {
                            F.Warning("\u8BF7\u9009\u62E9\u786C\u76D8\u5206\u533A");
                            return
                        }
                        if (p.value != null && (p.value.mountPoint == null || p.value.mountPoint == "")) {
                            F.Warning("\u8BE5\u5206\u533A\u5C1A\u672A\u6302\u8F7D\uFF0C\u8BF7\u5148\u53BB\u6302\u8F7D");
                            return
                        }
                        o.value = !1, Be({
                            action: "nas",
                            disk: c.value,
                            mount: p.value,
                            Cancel: () => {
                                o.value = !0
                            },
                            Next: b => {
                                u(b)
                            }
                        })
                    };
                return (b, _) => o.value ? (i(), M(et, {
                    key: 0,
                    type: 1
                }, {
                    default: V(() => [D(kt, {
                        name: "rotate",
                        mode: "out-in"
                    }, {
                        default: V(() => [t("div", V1, [G1, t("div", j1, [t("div", R1, [(i(!0), r(L, null, j(w(n).disks, v => (i(), M(We, {
                            disk: v,
                            onDisk: f,
                            currDisk: c.value,
                            currMountPoint: p.value
                        }, null, 8, ["disk", "currDisk", "currMountPoint"]))), 256)), (i(!0), r(L, null, j(w(n).raids, v => (i(), M(We, {
                            disk: v,
                            onDisk: f,
                            currDisk: c.value,
                            currMountPoint: p.value
                        }, null, 8, ["disk", "currDisk", "currMountPoint"]))), 256))])]), U1, t("div", {
                            class: "action-footer"
                        }, [W1, t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: l,
                            type: "button"
                        }, "\u8FD4\u56DE"), t("button", {
                            class: "cbi-button cbi-button-apply app-btn app-next",
                            onClick: m,
                            type: "button"
                        }, "\u4E0B\u4E00\u6B65")])])]),
                        _: 1
                    })]),
                    _: 1
                })) : C("", !0)
            }
        });
    var Z1 = Y(H1, [
            ["__scopeId", "data-v-12d0f96b"]
        ]),
        J1 = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(Z1, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        };
    const be = e => (O("data-v-67a63e8f"), e = e(), N(), e),
        X1 = {
            class: "action"
        },
        K1 = {
            class: "action-body"
        },
        Q1 = be(() => t("div", {
            class: "icon"
        }, [t("svg", {
            t: "1642063181211",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "5062",
            width: "128",
            height: "128",
            "data-v-cda444e0": ""
        }, [t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063",
            "data-v-cda444e0": ""
        })])], -1)),
        tc = be(() => t("h2", {
            class: "title"
        }, "\u670D\u52A1\u5DF2\u542F\u52A8", -1)),
        ec = {
            class: "info"
        },
        ac = be(() => t("span", null, "\u524D\u5F80", -1)),
        oc = ["href"],
        nc = be(() => t("span", null, "\u914D\u7F6E", -1)),
        ic = P({
            props: {
                Close: Function
            },
            setup(e) {
                const a = e,
                    o = y(""),
                    n = R(() => `http://${location.hostname}:${o.value}`);
                (() => {
                    S.Nas.Linkease.Enable.POST().then(p => {
                        var f, d;
                        (f = p == null ? void 0 : p.data) != null && f.result && (o.value = ((d = p.data.result) == null ? void 0 : d.port) || "")
                    })
                })();
                const c = () => {
                    a.Close && a.Close(), location.reload()
                };
                return (p, f) => (i(), M(et, {
                    type: 1
                }, {
                    default: V(() => [D(kt, {
                        name: "rotate",
                        mode: "out-in"
                    }, {
                        default: V(() => [t("div", X1, [t("div", K1, [Q1, tc, t("div", ec, [ac, t("a", {
                            href: w(n),
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, h(w(n)), 9, oc), nc]), t("div", {
                            class: "btns"
                        }, [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            type: "button",
                            onClick: c
                        }, "\u5173\u95ED")])])])]),
                        _: 1
                    })]),
                    _: 1
                }))
            }
        });
    var rc = Y(ic, [
            ["__scopeId", "data-v-67a63e8f"]
        ]),
        sc = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(rc, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        };
    const ae = e => (O("data-v-30ef6ccb"), e = e(), N(), e),
        dc = ["onSubmit"],
        uc = ae(() => t("div", {
            class: "action-header"
        }, [t("div", {
            class: "action-header_title"
        }, "Webdav\u5171\u4EAB\u914D\u7F6E")], -1)),
        lc = {
            class: "action-body"
        },
        cc = {
            class: "label-item"
        },
        pc = ae(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u670D\u52A1\u76EE\u5F55\u8DEF\u5F84")], -1)),
        fc = {
            class: "label-item_value"
        },
        mc = ["value"],
        bc = {
            class: "label-item"
        },
        vc = ae(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u7528\u6237\u540D")], -1)),
        gc = {
            class: "label-item_value"
        },
        _c = {
            class: "label-item"
        },
        hc = ae(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u5BC6\u7801")], -1)),
        xc = {
            class: "label-item_value"
        },
        kc = {
            class: "action-footer"
        },
        wc = ae(() => t("div", {
            class: "auto"
        }, null, -1)),
        yc = ["disabled"],
        Fc = ["disabled"],
        Ec = P({
            props: {
                rootPath: {
                    type: String,
                    required: !0
                },
                Close: Function
            },
            setup(e) {
                const a = e,
                    o = d => {
                        d.preventDefault(), a.Close && a.Close()
                    },
                    n = y(!1),
                    s = y({
                        username: "root",
                        password: "",
                        rootPath: a.rootPath
                    });
                (() => T(this, null, function* () {
                    const d = F.Loading("\u52A0\u8F7D\u4E2D...");
                    n.value = !0;
                    try {
                        const l = yield S.Nas.Webdav.Status.GET();
                        if (l != null && l.data) {
                            const {
                                result: u,
                                error: m
                            } = l.data;
                            if (m) {
                                F.Warning(m);
                                return
                            }
                            u && (u.username && (s.value.username = u.username), u.password && (s.value.password = u.password))
                        }
                    } catch (l) {
                        F.Error(l)
                    }
                    n.value = !1, d.Close()
                }))();
                const p = () => {
                        const d = s.value;
                        if (d.rootPath == "") {
                            F.Warning("\u5171\u4EAB\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A");
                            return
                        }
                        if (d.username == "") {
                            F.Warning("\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A");
                            return
                        }
                        if (d.password == "") {
                            F.Warning("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");
                            return
                        }
                        f(d)
                    },
                    f = d => T(this, null, function* () {
                        n.value = !0;
                        const l = F.Loading("\u521B\u5EFA\u4E2D...");
                        try {
                            const u = yield S.Nas.Webdav.Create.POST(d);
                            if (u != null && u.data) {
                                const {
                                    error: m,
                                    result: b
                                } = u.data;
                                m && F.Warning(m), b && (F.Success("\u521B\u5EFA\u6210\u529F"), window.setTimeout(() => {
                                    location.reload()
                                }, 1e3))
                            }
                        } catch (u) {
                            F.Error(u)
                        }
                        l.Close(), n.value = !1
                    });
                return (d, l) => (i(), M(et, {
                    type: 1
                }, {
                    default: V(() => [D(kt, {
                        name: "rotate",
                        mode: "out-in"
                    }, {
                        default: V(() => [t("form", {
                            class: "action",
                            onSubmit: nt(p, ["prevent"])
                        }, [uc, t("div", lc, [t("div", cc, [pc, t("div", fc, [t("input", {
                            type: "text",
                            value: s.value.rootPath,
                            disabled: "",
                            required: "",
                            style: {
                                backgroundColor: "#eee"
                            }
                        }, null, 8, mc)])]), t("div", bc, [vc, t("div", gc, [z(t("input", {
                            type: "text",
                            required: "",
                            placeholder: "\u8D26\u53F7\u7528\u6237\u540D",
                            "onUpdate:modelValue": l[0] || (l[0] = u => s.value.username = u)
                        }, null, 512), [
                            [W, s.value.username, void 0, {
                                trim: !0
                            }]
                        ])])]), t("div", _c, [hc, t("div", xc, [z(t("input", {
                            type: "password",
                            "onUpdate:modelValue": l[1] || (l[1] = u => s.value.password = u)
                        }, null, 512), [
                            [W, s.value.password, void 0, {
                                trim: !0
                            }]
                        ])])])]), t("div", kc, [wc, t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            type: "button",
                            onClick: o,
                            disabled: n.value
                        }, "\u5173\u95ED", 8, yc), t("button", {
                            class: "cbi-button cbi-button-apply app-btn app-next",
                            disabled: n.value
                        }, "\u521B\u5EFA", 8, Fc)])], 40, dc)]),
                        _: 1
                    })]),
                    _: 1
                }))
            }
        });
    var Cc = Y(Ec, [
            ["__scopeId", "data-v-30ef6ccb"]
        ]),
        $c = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(Cc, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        };
    const At = e => (O("data-v-3ef9e48f"), e = e(), N(), e),
        Dc = ["onSubmit"],
        Bc = At(() => t("div", {
            class: "action-header"
        }, [t("div", {
            class: "action-header_title"
        }, "Samba\u5171\u4EAB\u914D\u7F6E")], -1)),
        Yc = {
            class: "action-body"
        },
        Ac = {
            class: "label-item"
        },
        Sc = At(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u670D\u52A1\u76EE\u5F55\u8DEF\u5F84")], -1)),
        zc = {
            class: "label-item_value"
        },
        Pc = ["value"],
        Tc = {
            class: "label-item"
        },
        Ic = At(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u5171\u4EAB\u540D\uFF08\u5EFA\u8BAE\u4F7F\u7528\u82F1\u6587\u5B57\u6BCD\uFF09")], -1)),
        Lc = {
            class: "label-item_value"
        },
        Mc = {
            class: "label-item"
        },
        Oc = At(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u7528\u6237\u540D")], -1)),
        Nc = {
            class: "label-item_value"
        },
        qc = {
            class: "label-item"
        },
        Vc = At(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u5BC6\u7801")], -1)),
        Gc = {
            class: "label-item_value"
        },
        jc = {
            class: "samba-item"
        },
        Rc = {
            class: "samba-item_allow"
        },
        Uc = At(() => t("label", {
            for: "allow",
            class: "samba-allow"
        }, "\u5141\u8BB8\u65E7\u534F\u8BAE\u4E0E\u8EAB\u4EFD\u9A8C\u8BC1(\u4E0D\u5B89\u5168)", -1)),
        Wc = {
            class: "samba-item_tips"
        },
        Hc = {
            class: "tooltip-trigger"
        },
        Zc = {
            class: "samba_tip"
        },
        Jc = At(() => t("span", {
            class: "samba_dir_tip"
        }, "\u517C\u5BB9\u4E00\u4E9B\u7535\u89C6\u6216\u8005\u7535\u89C6\u76D2\u5B50", -1)),
        Xc = {
            class: "action-footer"
        },
        Kc = At(() => t("div", {
            class: "auto"
        }, null, -1)),
        Qc = ["disabled"],
        t2 = ["disabled"],
        e2 = P({
            props: {
                rootPath: {
                    type: String,
                    required: !0
                },
                Close: Function
            },
            setup(e) {
                const a = e,
                    o = f => {
                        f.preventDefault(), a.Close && a.Close()
                    },
                    n = y(!1),
                    s = y({
                        shareName: "",
                        username: "",
                        password: "",
                        rootPath: a.rootPath,
                        allowLegacy: !1
                    }),
                    c = () => {
                        const f = s.value;
                        if (f.rootPath == "") {
                            F.Warning("\u5171\u4EAB\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A");
                            return
                        }
                        if (f.shareName == "") {
                            F.Warning("\u5171\u4EAB\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A");
                            return
                        }
                        if (f.username == "") {
                            F.Warning("\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A");
                            return
                        }
                        if (f.password == "") {
                            F.Warning("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");
                            return
                        }
                        const d = yt.checkSmabaUserName(f.username);
                        if (d !== !0) {
                            F.Warning(`${d}`);
                            return
                        }
                        p(f)
                    },
                    p = f => T(this, null, function* () {
                        n.value = !0;
                        const d = F.Loading("\u521B\u5EFA\u4E2D...");
                        try {
                            const l = yield S.Nas.Samba.Create.POST(f);
                            if (l != null && l.data) {
                                const {
                                    error: u,
                                    result: m
                                } = l.data;
                                u && F.Warning(u), m && (F.Success("\u521B\u5EFA\u6210\u529F"), window.setTimeout(() => {
                                    location.reload()
                                }, 1e3))
                            }
                        } catch (l) {
                            F.Error(l)
                        }
                        d.Close(), n.value = !1
                    });
                return (f, d) => (i(), M(et, {
                    type: 1
                }, {
                    default: V(() => [D(kt, {
                        name: "rotate",
                        mode: "out-in"
                    }, {
                        default: V(() => [t("form", {
                            class: "action",
                            onSubmit: nt(c, ["prevent"])
                        }, [Bc, t("div", Yc, [t("div", Ac, [Sc, t("div", zc, [t("input", {
                            type: "text",
                            value: s.value.rootPath,
                            disabled: "",
                            required: "",
                            style: {
                                backgroundColor: "#eee"
                            }
                        }, null, 8, Pc)])]), t("div", Tc, [Ic, t("div", Lc, [z(t("input", {
                            type: "text",
                            "onUpdate:modelValue": d[0] || (d[0] = l => s.value.shareName = l),
                            required: "",
                            placeholder: "\u5171\u4EAB\u540D\u79F0"
                        }, null, 512), [
                            [W, s.value.shareName, void 0, {
                                trim: !0
                            }]
                        ])])]), t("div", Mc, [Oc, t("div", Nc, [z(t("input", {
                            type: "text",
                            required: "",
                            placeholder: "\u8D26\u53F7\u7528\u6237\u540D",
                            "onUpdate:modelValue": d[1] || (d[1] = l => s.value.username = l)
                        }, null, 512), [
                            [W, s.value.username, void 0, {
                                trim: !0
                            }]
                        ])])]), t("div", qc, [Vc, t("div", Gc, [z(t("input", {
                            type: "password",
                            "onUpdate:modelValue": d[2] || (d[2] = l => s.value.password = l)
                        }, null, 512), [
                            [W, s.value.password, void 0, {
                                trim: !0
                            }]
                        ])])]), t("div", jc, [t("div", Rc, [z(t("input", {
                            type: "checkbox",
                            id: "allow",
                            "onUpdate:modelValue": d[3] || (d[3] = l => s.value.allowLegacy = l)
                        }, null, 512), [
                            [Lt, s.value.allowLegacy]
                        ]), Uc]), t("div", Wc, [t("span", Hc, [t("span", Zc, [D(gt)]), Jc])])])]), t("div", Xc, [Kc, t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            type: "button",
                            onClick: o,
                            disabled: n.value
                        }, "\u5173\u95ED", 8, Qc), t("button", {
                            class: "cbi-button cbi-button-apply app-btn app-next",
                            disabled: n.value
                        }, "\u521B\u5EFA", 8, t2)])], 40, Dc)]),
                        _: 1
                    })]),
                    _: 1
                }))
            }
        });
    var a2 = Y(e2, [
            ["__scopeId", "data-v-3ef9e48f"]
        ]),
        o2 = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(a2, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        };
    const Vt = e => !Array.isArray(window.quickstart_features) || window.quickstart_features.indexOf(e) != -1,
        Ut = e => (O("data-v-650e3bd4"), e = e(), N(), e),
        n2 = {
            key: 0,
            class: "action"
        },
        i2 = Ut(() => t("h2", {
            class: "title"
        }, "\u6B22\u8FCE\u4F7F\u7528 NAS \u914D\u7F6E\u5411\u5BFC", -1)),
        r2 = Ut(() => t("h3", {
            class: "desc"
        }, "\u8BF7\u9009\u62E9\u9700\u8981\u6DFB\u52A0\u7684NAS\u670D\u52A1", -1)),
        s2 = Ut(() => t("option", {
            value: "linkease"
        }, "\u8DE8\u8BBE\u5907\u5171\u4EAB\uFF08\u6613\u6709\u4E91\uFF09", -1)),
        d2 = Ut(() => t("option", {
            value: "samba"
        }, "\u5C40\u57DF\u7F51\u6587\u4EF6\u5171\u4EAB\uFF08Samba\uFF09", -1)),
        u2 = Ut(() => t("option", {
            value: "webdav"
        }, "\u5C40\u57DF\u7F51\u6587\u4EF6\u5171\u4EAB\uFF08WebDAV\uFF09", -1)),
        l2 = [s2, d2, u2],
        c2 = {
            key: 0,
            class: "tips"
        },
        p2 = U("\u5982\u9700\u5BF9 Samba \u6216 WebDAV \u8FDB\u884C\u66F4\u7EC6\u81F4\u7684\u6743\u9650\u63A7\u5236\uFF0C\u8BF7\u4F7F\u7528\u201C"),
        f2 = Ut(() => t("a", {
            href: "/cgi-bin/luci/admin/nas/unishare"
        }, "\u7EDF\u4E00\u6587\u4EF6\u5171\u4EAB", -1)),
        m2 = U("\u201D"),
        b2 = [p2, f2, m2],
        v2 = {
            class: "btns"
        },
        g2 = ["disabled"],
        _2 = P({
            props: {
                setup: Number,
                Close: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(!0),
                    n = y("linkease"),
                    s = y(!1),
                    c = y(a.setup || 0),
                    p = () => {
                        a.Close && a.Close()
                    },
                    f = () => T(this, null, function* () {
                        switch (n.value) {
                            case "webdav":
                                yield d();
                                break;
                            case "samba":
                                yield u();
                                break;
                            case "linkease":
                                yield l();
                                break
                        }
                    }),
                    d = () => T(this, null, function* () {
                        s.value = !0, (yield ct.checkAndInstallApp("app-meta-gowebdav", "GoWebdav")) && m(), s.value = !1
                    }),
                    l = () => T(this, null, function* () {
                        s.value = !0, (yield ct.checkAndInstallApp("linkease", "\u6613\u6709\u4E91", "app-meta-linkease")) && b(), s.value = !1
                    }),
                    u = () => T(this, null, function* () {
                        s.value = !0;
                        const g = F.Loading("\u914D\u7F6E\u4E2D...");
                        m(), g.Close(), s.value = !1
                    }),
                    m = () => {
                        s.value = !1, o.value = !1, J1({
                            Cancel: () => {
                                o.value = !0
                            },
                            Next: g => {
                                switch (n.value) {
                                    case "webdav":
                                        _(g);
                                        break;
                                    case "samba":
                                        v(g);
                                        break
                                }
                            }
                        })
                    },
                    b = () => {
                        sc({}), p()
                    },
                    _ = g => {
                        $c({
                            rootPath: g
                        }), p()
                    },
                    v = g => {
                        o2({
                            rootPath: g
                        }), p()
                    };
                return (g, k) => o.value ? (i(), M(et, {
                    key: 0,
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => [D(kt, {
                        name: "rotate",
                        mode: "out-in"
                    }, {
                        default: V(() => [c.value == 0 ? (i(), r("div", n2, [i2, r2, t("form", null, [t("label", null, [z(t("select", {
                            "onUpdate:modelValue": k[0] || (k[0] = x => n.value = x)
                        }, l2, 512), [
                            [Q, n.value]
                        ])])]), w(Vt)("unishare") ? (i(), r("div", c2, b2)) : C("", !0), t("div", v2, [t("button", {
                            class: "cbi-button cbi-button-apply app-btn app-next",
                            onClick: f,
                            type: "button",
                            disabled: s.value
                        }, "\u4E0B\u4E00\u6B65", 8, g2), t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: p,
                            type: "button"
                        }, "\u53D6\u6D88")])])) : C("", !0)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["Close"])) : C("", !0)
            }
        });
    var h2 = Y(_2, [
            ["__scopeId", "data-v-650e3bd4"]
        ]),
        ca = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(h2, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        };
    const Se = e => (O("data-v-edf68726"), e = e(), N(), e),
        x2 = {
            class: "app-container_linkease"
        },
        k2 = {
            class: "linkease-item"
        },
        w2 = Se(() => t("div", {
            class: "linkease-item_name"
        }, [t("span", null, "\u5F53\u524D\u72B6\u6001:")], -1)),
        y2 = {
            class: "linkease-item_value"
        },
        F2 = {
            key: 0,
            class: "configure"
        },
        E2 = {
            key: 0,
            class: "linkease-item"
        },
        C2 = Se(() => t("div", {
            class: "linkease-item_name"
        }, [t("span", null, "\u670D\u52A1\u5730\u5740:")], -1)),
        $2 = {
            class: "linkease-item_value"
        },
        D2 = ["href"],
        B2 = Se(() => t("div", null, [t("a", {
            href: " https://app.linkease.com/",
            target: "_blank"
        }, "\u4E0B\u8F7D\u6613\u6709\u4E91\u5BA2\u6237\u7AEF\uFF0C\u968F\u65F6\u968F\u5730\u76F8\u518C\u5907\u4EFD\u3001\u8FDC\u7A0B\u8BBF\u95EE")], -1)),
        Y2 = P({
            props: {
                linkease: {
                    type: Object
                }
            },
            setup(e) {
                const a = e,
                    o = R(() => {
                        var s;
                        return `http://${location.hostname}:${(s=a.linkease)==null?void 0:s.port}`
                    }),
                    n = () => {
                        ca({
                            setup: 0
                        })
                    };
                return (s, c) => {
                    var p, f, d;
                    return i(), r("ul", x2, [t("li", k2, [w2, t("div", y2, [(p = e.linkease) != null && p.enabel ? (i(), r("span", F2, "\u5DF2\u914D\u7F6E")) : (i(), r("span", {
                        key: 1,
                        class: "configure enabel",
                        onClick: c[0] || (c[0] = l => n())
                    }, "\u672A\u914D\u7F6E"))])]), (f = e.linkease) != null && f.enabel ? (i(), r(L, {
                        key: 0
                    }, [(d = e.linkease) != null && d.port ? (i(), r("li", E2, [C2, t("div", $2, [t("a", {
                        href: w(o),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, h(w(o)), 9, D2)])])) : C("", !0)], 64)) : C("", !0), B2])
                }
            }
        });
    var A2 = Y(Y2, [
        ["__scopeId", "data-v-edf68726"]
    ]);
    const pa = e => (O("data-v-8376a10e"), e = e(), N(), e),
        S2 = {
            class: "app-container"
        },
        z2 = {
            class: "app-container_title"
        },
        P2 = pa(() => t("span", null, "Internet Service", -1)),
        T2 = {
            class: "app-container_tool"
        },
        I2 = {
            class: "more_icon",
            title: "View internet service information"
        },
        L2 = {
            class: "DeviceBlock"
        },
        M2 = pa(() => t("li", null, [t("a", {
            href: "/cgi-bin/luci/admin/services/samba4"
        }, "SAMBA\u9AD8\u7EA7\u914D\u7F6E")], -1)),
        O2 = {
            class: "app-container_body"
        },
        N2 = {
            class: "app-container_nas-menu"
        },
        q2 = P({
            setup(e) {
                const a = y(!1),
                    o = y("linkease"),
                    n = y(),
                    s = Qe();
                (() => {
                    S.Nas.Service.Status.GET().then(l => {
                        var u;
                        if ((u = l == null ? void 0 : l.data) != null && u.result) {
                            const m = l.data.result;
                            n.value = m, m.webdav && (s.webdav = m.webdav)
                        }
                    })
                })();
                const p = () => {
                        ca({
                            setup: 0
                        })
                    },
                    f = () => {
                        a.value = !a.value
                    },
                    d = () => {
                        f(), ct.installAndGo("app-meta-gowebdav", "GoWebDAV", "/cgi-bin/luci/admin/nas/gowebdav")
                    };
                return (l, u) => {
                    var b, _, v;
                    const m = X("GlHelp");
                    return i(), r("div", S2, [t("div", z2, [t("span", null, [P2, D(m, {
                        type: "store"
                    })]), t("div", T2, [t("div", {
                        class: "app-container_configure",
                        onClick: p
                    }, "\u5FEB\u901F\u914D\u7F6E"), t("span", I2, [D($t, {
                        onClick: f
                    })])]), z(t("div", L2, [t("div", {
                        class: "menu_background",
                        onClick: f
                    }), t("ul", null, [M2, t("li", null, [t("a", {
                        onClick: d
                    }, "WebDAV\u9AD8\u7EA7\u914D\u7F6E")])])], 512), [
                        [wt, a.value]
                    ])]), t("div", O2, [t("ul", N2, [t("button", {
                        onClick: u[0] || (u[0] = g => o.value = "linkease"),
                        class: ot({
                            on: o.value == "linkease"
                        })
                    }, "Remote Access", 2), t("button", {
                        onClick: u[1] || (u[1] = g => o.value = "samba"),
                        class: ot({
                            on: o.value == "samba"
                        })
                    }, "IP Info", 2), t("button", {
                        onClick: u[2] || (u[2] = g => o.value = "webdav"),
                        class: ot({
                            on: o.value == "webdav"
                        })
                    }, "WEBDAV", 2)]), o.value == "samba" ? (i(), M(p1, {
                        key: 0,
                        sambas: (b = n.value) == null ? void 0 : b.sambas
                    }, null, 8, ["sambas"])) : o.value == "webdav" ? (i(), M(D1, {
                        key: 1,
                        webdav: (_ = n.value) == null ? void 0 : _.webdav
                    }, null, 8, ["webdav"])) : o.value == "linkease" ? (i(), M(A2, {
                        key: 2,
                        linkease: (v = n.value) == null ? void 0 : v.linkease
                    }, null, 8, ["linkease"])) : C("", !0)])])
                }
            }
        });
    var V2 = Y(q2, [
        ["__scopeId", "data-v-8376a10e"]
    ]);
    const ve = e => (O("data-v-3fd3a42d"), e = e(), N(), e),
        G2 = {
            class: "app-container_docker"
        },
        j2 = {
            class: "docker-item"
        },
        R2 = ve(() => t("div", {
            class: "docker-item_name"
        }, [t("span", null, "Status")], -1)),
        U2 = {
            key: 0,
            class: "docker-item_value"
        },
        W2 = ve(() => t("span", {
            class: "configure"
        }, "Not Installed", -1)),
        H2 = [W2],
        Z2 = {
            key: 1,
            class: "docker-item_value"
        },
        J2 = {
            class: "input-switch"
        },
        X2 = ["value", "disabled"],
        K2 = ve(() => t("em", null, null, -1)),
        Q2 = [K2],
        t6 = {
            key: 0,
            class: "docker-item"
        },
        e6 = ve(() => t("div", {
            class: "docker-item_name"
        }, [t("span", null, "Directory")], -1)),
        a6 = {
            class: "docker-item_value"
        },
        o6 = {
            class: "configure enabel"
        },
        n6 = {
            key: 0
        },
        i6 = {
            class: "tooltip-trigger"
        },
        r6 = {
            class: "docker_tip"
        },
        s6 = {
            class: "tooltip-text tooltip-top"
        },
        d6 = {
            class: "docker_dir_tip"
        },
        u6 = P({
            props: {
                docker: {
                    type: Object
                }
            },
            setup(e) {
                var c;
                const a = e,
                    o = R(() => {
                        var p;
                        return ((p = a.docker) == null ? void 0 : p.status) != "not installed"
                    }),
                    n = it({
                        enable: ((c = a.docker) == null ? void 0 : c.status) == "running",
                        disabled: !1
                    }),
                    s = () => T(this, null, function* () {
                        n.disabled = !0;
                        try {
                            const p = yield S.Guide.DockerSwitch.POST({
                                enable: n.enable
                            });
                            if (p != null && p.data) {
                                const {
                                    success: f,
                                    error: d
                                } = p.data;
                                if (d) throw n.enable = !n.enable, d;
                                (f || 0) == 0
                            }
                        } catch (p) {
                            F.Warning(`${p}`)
                        } finally {
                            n.disabled = !1
                        }
                    });
                return (p, f) => {
                    var d, l, u, m;
                    return i(), r("ul", G2, [t("li", j2, [R2, (d = a.docker) != null && d.status ? (i(), r(L, {
                        key: 0
                    }, [w(o) ? (i(), r("div", Z2, [t("label", J2, [z(t("input", {
                        type: "checkbox",
                        hidden: "",
                        value: !w(n).enable,
                        "onUpdate:modelValue": f[0] || (f[0] = b => w(n).enable = b),
                        disabled: w(n).disabled,
                        onChange: s
                    }, null, 40, X2), [
                        [Lt, w(n).enable]
                    ]), t("span", {
                        class: ot(w(n).enable ? "enable" : "close")
                    }, Q2, 2)])])) : (i(), r("div", U2, H2))], 64)) : C("", !0)]), ((l = e.docker) == null ? void 0 : l.status) == "running" ? (i(), r("li", t6, [e6, t("div", a6, [t("span", o6, h((u = e.docker) == null ? void 0 : u.path), 1), (m = e.docker) != null && m.errorInfo ? (i(), r("span", n6, [t("span", i6, [t("span", r6, [D(gt)]), t("div", null, [t("div", s6, [t("span", d6, h(e.docker.errorInfo), 1)])])])])) : C("", !0)])])) : C("", !0)])
                }
            }
        });
    var l6 = Y(u6, [
        ["__scopeId", "data-v-3fd3a42d"]
    ]);
    const c6 = {},
        p6 = {
            width: "128px",
            height: "128px",
            viewBox: "0 0 128 128",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        f6 = t("g", {
            id: "icon_yellow",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "Icon/Warning"
        }, [t("rect", {
            id: "rectangle",
            fill: "#000000",
            "fill-rule": "nonzero",
            opacity: "0",
            x: "0",
            y: "0",
            width: "128",
            height: "128"
        }), t("path", {
            d: "M64,8 C33.075,8 8,33.075 8,64 C8,94.925 33.075,120 64,120 C94.925,120 120,94.925 120,64 C120,33.075 94.925,8 64,8 Z M60,37 C60,36.45 60.45,36 61,36 L67,36 C67.55,36 68,36.45 68,37 L68,71 C68,71.55 67.55,72 67,72 L61,72 C60.45,72 60,71.55 60,71 L60,37 Z M64,92 C60.6875,92 58,89.3125 58,86 C58,82.6875 60.6875,80 64,80 C67.3125,80 70,82.6875 70,86 C70,89.3125 67.3125,92 64,92 Z",
            id: "shape",
            fill: "#FAAD14"
        })])], -1),
        m6 = [f6];

    function b6(e, a) {
        return i(), r("svg", p6, m6)
    }
    var v6 = Y(c6, [
        ["render", b6]
    ]);
    const pt = e => (O("data-v-b8b2bddc"), e = e(), N(), e),
        g6 = {
            key: 0,
            class: "action"
        },
        _6 = pt(() => t("div", {
            class: "title"
        }, "Docker Migration Wizard", -1)),
        h6 = pt(() => t("div", {
            class: "desc"
        }, "When system root directory space is insufficient, docker root directory can be migrated to external hard disk to ensure normal operation of docker system.", -1)),
        x6 = {
            key: 1,
            class: "action"
        },
        k6 = pt(() => t("div", {
            class: "title"
        }, "Docker Migration Wizard", -1)),
        w6 = pt(() => t("div", {
            class: "desc"
        }, "When system root directory space is insufficient, docker root directory can be migrated to external hard disk to ensure normal operation of docker system.", -1)),
        y6 = {
            class: "roots"
        },
        F6 = pt(() => t("span", {
            class: "roots_tit"
        }, "Directory\uff1a", -1)),
        E6 = {
            class: "root"
        },
        C6 = {
            class: "move"
        },
        $6 = pt(() => t("span", {
            class: "roots_tit"
        }, "Migrated\uff1a", -1)),
        D6 = {
            key: 0
        },
        B6 = ["onSubmit"],
        Y6 = {
            class: "select-editable"
        },
        A6 = pt(() => t("option", {
            selected: "",
            value: null
        }, "Please select a re-location address", -1)),
        S6 = ["value"],
        z6 = pt(() => t("option", {
            value: "useInput"
        }, "- -Customize- -", -1)),
        P6 = {
            key: 1,
            class: "tips"
        },
        T6 = {
            class: "tips_content"
        },
        I6 = pt(() => t("span", {
            class: "tip"
        }, "Detected that you have not mounted the external hard disk, you need to connect the hard disk and format or manually mount hard disk, and then execute Docker Migration Wizard fo migrate docker to the target hard disk.", -1)),
        L6 = {
            key: 0,
            class: "btns"
        },
        M6 = {
            key: 1,
            class: "btns"
        },
        O6 = {
            key: 2,
            class: "action docker_success"
        },
        N6 = pt(() => t("h2", {
            class: "title"
        }, "Docker Migration Wizard", -1)),
        q6 = {
            class: "finished"
        },
        V6 = pt(() => t("p", {
            class: "successed"
        }, "Migration successfully", -1)),
        G6 = {
            key: 3,
            class: "action docker_download"
        },
        j6 = pt(() => t("h2", {
            class: "title"
        }, "Docker Migration Wizard", -1)),
        R6 = {
            class: "finished"
        },
        U6 = pt(() => t("p", {
            class: "successed"
        }, "Destination path is not empty", -1)),
        W6 = {
            class: "docker_moves"
        },
        H6 = {
            class: "moves change"
        },
        Z6 = pt(() => t("label", {
            for: "move"
        }, "Replace directory (do not overwrite the target path, only modify docker directory to target path)", -1)),
        J6 = {
            class: "moves"
        },
        X6 = pt(() => t("label", {
            for: "cover"
        }, "Overwrite migration (overwrite the target path, continuing to migrate will clear files under target path)", -1)),
        K6 = {
            class: "btns"
        },
        Q6 = P({
            props: {
                rootPath: {
                    type: String,
                    required: !0
                },
                Close: Function
            },
            setup(e) {
                const a = e,
                    o = y(),
                    n = y(),
                    s = y(0),
                    c = y("null"),
                    p = y(""),
                    f = y(),
                    d = y(!1),
                    l = y("");
                (() => {
                    S.Nas.Disk.Status.GET().then(x => {
                        x != null && x.data.result && (f.value = x == null ? void 0 : x.data.result)
                    }), S.Guide.DockerStatus.GET().then(x => {
                        var E;
                        if ((E = x == null ? void 0 : x.data) != null && E.result) {
                            const A = x.data.result;
                            o.value = A
                        }
                    }), S.Guide.DockerPartitionList.GET().then(x => {
                        var E;
                        if ((E = x == null ? void 0 : x.data) != null && E.result) {
                            const A = x.data.result;
                            n.value = A
                        }
                    })
                })();
                const m = x => {
                        let E = c.value;
                        if (E == "useInput" && (E = p.value), E == null || E == "null" || E == "") return;
                        const A = F.Loading("Migrating...");
                        S.Guide.DockerTransfer.POST({
                            path: E,
                            force: x,
                            overwriteDir: !!l.value
                        }).then(B => {
                            var $;
                            if (B != null && B.data) {
                                if ((B.data.success || 0) == 0) {
                                    if (($ = B.data.result) != null && $.emptyPathWarning) {
                                        d.value = !0, s.value = 2;
                                        return
                                    }
                                    s.value = 1;
                                    return
                                } else if (B.data.error) throw B.data.error
                            }
                            throw "Unknown mistake"
                        }).catch(B => {
                            F.Error(B)
                        }).finally(() => A.Close())
                    },
                    b = () => {
                        d.value = !1, m(!1)
                    },
                    _ = x => {
                        x.preventDefault(), a.Close && a.Close()
                    },
                    v = x => {
                        x.preventDefault(), location.reload()
                    },
                    g = x => {
                        x.preventDefault(), s.value = 0
                    },
                    k = x => {
                        x.preventDefault(), m(!0)
                    };
                return (x, E) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => {
                        var A, B, $, q, H, G;
                        return [s.value == -1 ? (i(), r("div", g6, [_6, h6, t("div", {
                            class: "btns"
                        }, [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            type: "button",
                            onClick: _
                        }, "Cancel")])])) : s.value == 0 ? (i(), r("div", x6, [k6, w6, t("div", y6, [F6, t("span", E6, h((A = o.value) == null ? void 0 : A.path), 1)]), t("div", C6, [$6, ($ = (B = n.value) == null ? void 0 : B.partitionList) != null && $.length ? (i(), r("div", D6, [t("form", {
                            onSubmit: nt(b, ["prevent"])
                        }, [t("label", null, [t("div", Y6, [z(t("select", {
                            "onUpdate:modelValue": E[0] || (E[0] = Z => c.value = Z)
                        }, [A6, (i(!0), r(L, null, j((q = n.value) == null ? void 0 : q.partitionList, (Z, ht) => (i(), r("option", {
                            value: Z,
                            key: ht
                        }, h(Z), 9, S6))), 128)), z6], 512), [
                            [Q, c.value, void 0, {
                                trim: !0
                            }]
                        ]), c.value == "useInput" ? z((i(), r("input", {
                            key: 0,
                            type: "text",
                            "onUpdate:modelValue": E[1] || (E[1] = Z => p.value = Z),
                            required: "",
                            placeholder: "Please enter migration address"
                        }, null, 512)), [
                            [W, p.value, void 0, {
                                trim: !0
                            }]
                        ]) : C("", !0)])])], 40, B6)])) : n.value ? (i(), r("div", P6, [t("div", T6, [I6])])) : C("", !0)]), (G = (H = n.value) == null ? void 0 : H.partitionList) != null && G.length ? (i(), r("div", L6, [t("button", {
                            class: "cbi-button cbi-button-apply app-btn",
                            onClick: b
                        }, "Save & Apply"), t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            type: "button",
                            onClick: _
                        }, "Cancel")])) : (i(), r("div", M6, [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: _
                        }, "Close")]))])) : s.value == 1 ? (i(), r("div", O6, [N6, t("div", q6, [D(De)]), V6, t("div", {
                            class: "btns"
                        }, [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: v
                        }, "Exit")])])) : s.value == 2 ? (i(), r("div", G6, [j6, t("div", R6, [D(v6)]), U6, t("div", W6, [t("div", H6, [z(t("input", {
                            type: "radio",
                            id: "move",
                            name: "moves",
                            "onUpdate:modelValue": E[2] || (E[2] = Z => l.value = Z),
                            value: ""
                        }, null, 512), [
                            [ft, l.value]
                        ]), Z6]), t("div", J6, [z(t("input", {
                            type: "radio",
                            id: "cover",
                            name: "moves",
                            "onUpdate:modelValue": E[3] || (E[3] = Z => l.value = Z),
                            value: "true"
                        }, null, 512), [
                            [ft, l.value]
                        ]), X6])]), t("div", K6, [d.value ? (i(), r("button", {
                            key: 0,
                            class: "cbi-button cbi-button-apply app-btn",
                            onClick: k
                        }, "Apply")) : C("", !0), t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: g
                        }, "Cancel"), d.value ? C("", !0) : (i(), r("button", {
                            key: 1,
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            type: "button",
                            onClick: v
                        }, "Cancel"))])])) : C("", !0)]
                    }),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var t5 = Y(Q6, [
        ["__scopeId", "data-v-b8b2bddc"]
    ]);
    const e5 = () => {
            const e = document.createElement("div");
            document.body.appendChild(e);
            const a = tt(t5, {
                Close: () => {
                    o()
                }
            });
            a.mount(e);
            const o = () => {
                a.unmount(), e.remove()
            };
            return {
                Close: o
            }
        },
        fa = e => (O("data-v-223bcc06"), e = e(), N(), e),
        a5 = {
            class: "app-container"
        },
        o5 = {
            class: "app-container_title"
        },
        n5 = fa(() => t("span", null, "Docker", -1)),
        i5 = {
            key: 0,
            class: "app-container_tool"
        },
        r5 = {
            key: 1,
            class: "more_icon",
            title: "View docker information"
        },
        s5 = {
            class: "DeviceBlock"
        },
        d5 = fa(() => t("ul", null, [t("li", null, [t("a", {
            href: "/cgi-bin/luci/admin/docker/overview"
        }, "Advanced Config")])], -1)),
        u5 = {
            key: 1,
            class: "loading_placeholder"
        },
        l5 = P({
            props: {
                docker: {
                    type: Object
                }
            },
            setup(e) {
                const a = y(!1),
                    o = y(),
                    n = y(!1),
                    s = () => {
                        n.value = !n.value
                    },
                    c = () => {
                        e5()
                    };
                return setTimeout(() => {
                    S.Guide.DockerStatus.GET().then(f => {
                        var d;
                        if ((d = f == null ? void 0 : f.data) != null && d.result) {
                            const l = f.data.result;
                            o.value = l
                        }
                    }).finally(() => {
                        a.value = !0
                    })
                }, 1100), (f, d) => {
                    var m, b;
                    const l = X("GlHelp"),
                        u = X("icon-loading");
                    return i(), r("div", a5, [t("div", o5, [t("span", null, [n5, D(l, {
                        type: "docker"
                    })]), a.value ? (i(), r("div", i5, [((m = o.value) == null ? void 0 : m.status) != "not installed" ? (i(), r("div", {
                        key: 0,
                        class: "app-container_configure",
                        onClick: c
                    }, "Quick Config")) : C("", !0), ((b = o.value) == null ? void 0 : b.status) === "running" ? (i(), r("span", r5, [D($t, {
                        onClick: s
                    })])) : C("", !0)])) : C("", !0), z(t("div", s5, [t("div", {
                        class: "menu_background",
                        onClick: s
                    }), d5], 512), [
                        [wt, n.value]
                    ])]), t("div", null, [a.value ? (i(), M(l6, {
                        key: 0,
                        docker: o.value
                    }, null, 8, ["docker"])) : (i(), r("div", u5, [D(u, {
                        size: 50,
                        color: "currentColor"
                    })]))])])
                }
            }
        });
    var c5 = Y(l5, [
        ["__scopeId", "data-v-223bcc06"]
    ]);
    const oe = e => (O("data-v-dbe287b2"), e = e(), N(), e),
        p5 = {
            class: "app-container_aria2"
        },
        f5 = {
            class: "aria2-item"
        },
        m5 = oe(() => t("div", {
            class: "aria2-item_name"
        }, [t("span", null, "\u5F53\u524D\u72B6\u6001:")], -1)),
        b5 = {
            class: "aria2-item_value"
        },
        v5 = {
            key: 0,
            class: "configure"
        },
        g5 = {
            key: 1,
            class: "configure enabel"
        },
        _5 = {
            class: "aria2-item"
        },
        h5 = oe(() => t("div", {
            class: "aria2-item_name"
        }, [t("span", null, "\u4E0B\u8F7D\u76EE\u5F55:")], -1)),
        x5 = {
            class: "aria2-item_value"
        },
        k5 = ["href"],
        w5 = {
            class: "aria2-item"
        },
        y5 = oe(() => t("div", {
            class: "aria2-item_name"
        }, [t("span", null, "\u7F51\u7EDC\u5730\u5740:")], -1)),
        F5 = {
            class: "aria2-item_value"
        },
        E5 = ["href"],
        C5 = {
            class: "aria2-item"
        },
        $5 = oe(() => t("div", {
            class: "aria2-item_name right"
        }, [t("span", null, "\u8BA4\u8BC1\u5931\u8D25\uFF1F")], -1)),
        D5 = {
            class: "aria2-item_value"
        },
        B5 = ["href"],
        Y5 = oe(() => t("div", {
            class: "use-url_app"
        }, [t("a", {
            href: "https://doc.linkease.com/zh/guide/linkease_app/tutorial.html#%E8%BF%9C%E7%A8%8B%E4%B8%8B%E8%BD%BD",
            target: "_blank"
        }, "\u4F7F\u7528\u6613\u6709\u4E91APP\uFF0C\u968F\u65F6\u968F\u5730\u8FDC\u7A0B\u4E0B\u8F7D")], -1)),
        A5 = P({
            props: {
                aria2: {
                    type: Object
                }
            },
            setup(e) {
                const a = e,
                    o = R(() => {
                        var s;
                        return `${location.origin}${(s=a.aria2)==null?void 0:s.webPath}`
                    }),
                    n = R(() => {
                        var p, f, d;
                        let s = (p = a.aria2) == null ? void 0 : p.rpcToken;
                        s && (s = encodeURIComponent(btoa(s)));
                        const c = encodeURIComponent(location.hostname);
                        return `${location.origin}${(f=a.aria2)==null?void 0:f.webPath}/#!/settings/rpc/set/http/${c}/${(d=a.aria2)==null?void 0:d.rpcPort}/jsonrpc/${s}`
                    });
                return (s, c) => {
                    var p, f, d, l;
                    return i(), r("ul", p5, [t("li", f5, [m5, t("div", b5, [((p = e.aria2) == null ? void 0 : p.status) == "running" ? (i(), r("span", v5, "\u5DF2\u542F\u52A8")) : (i(), r("span", g5, "\u672A\u542F\u52A8"))])]), ((f = e.aria2) == null ? void 0 : f.status) == "running" ? (i(), r(L, {
                        key: 0
                    }, [t("li", _5, [h5, t("div", x5, [t("a", {
                        target: "_blank",
                        href: "/cgi-bin/luci/admin/services/linkease/file/?path=/root" + ((d = e.aria2) == null ? void 0 : d.downloadPath)
                    }, h((l = e.aria2) == null ? void 0 : l.downloadPath), 9, k5)])]), t("li", w5, [y5, t("div", F5, [t("a", {
                        href: w(o),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, h(w(o)), 9, E5)])]), t("li", C5, [$5, t("div", D5, [t("a", {
                        href: w(n),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "\u70B9\u6B64\u81EA\u52A8\u914D\u7F6E AriaNg", 8, B5)])])], 64)) : C("", !0), Y5])
                }
            }
        });
    var S5 = Y(A5, [
        ["__scopeId", "data-v-dbe287b2"]
    ]);
    const ge = e => (O("data-v-1af61e64"), e = e(), N(), e),
        z5 = {
            class: "app-container_qbittorrent"
        },
        P5 = {
            class: "qbittorrent-item"
        },
        T5 = ge(() => t("div", {
            class: "qbittorrent-item_name"
        }, [t("span", null, "\u5F53\u524D\u72B6\u6001:")], -1)),
        I5 = {
            class: "qbittorrent-item_value"
        },
        L5 = {
            key: 0,
            class: "configure"
        },
        M5 = {
            key: 1,
            class: "configure enabel"
        },
        O5 = {
            class: "qbittorrent-item"
        },
        N5 = ge(() => t("div", {
            class: "qbittorrent-item_name"
        }, [t("span", null, "\u4E0B\u8F7D\u76EE\u5F55:")], -1)),
        q5 = {
            class: "qbittorrent-item_value"
        },
        V5 = ["href"],
        G5 = {
            class: "qbittorrent-item"
        },
        j5 = ge(() => t("div", {
            class: "qbittorrent-item_name"
        }, [t("span", null, "\u7F51\u7EDC\u5730\u5740:")], -1)),
        R5 = {
            class: "qbittorrent-item_value"
        },
        U5 = ["href"],
        W5 = ge(() => t("li", {
            class: "qbittorrent-item"
        }, [t("div", {
            class: "qbittorrent-item_name right"
        }, [t("span", null, "\u9ED8\u8BA4\u7528\u6237\u540D\uFF1Aadmin")]), t("div", {
            class: "qbittorrent-item_value"
        }, [t("span", null, "\u9ED8\u8BA4\u5BC6\u7801\uFF1Aadminadmin")])], -1)),
        H5 = P({
            props: {
                qbittorrent: {
                    type: Object
                }
            },
            setup(e) {
                const a = e,
                    o = R(() => {
                        var n;
                        return `http://${location.hostname}${(n=a.qbittorrent)==null?void 0:n.webPath}`
                    });
                return (n, s) => {
                    var c, p, f, d;
                    return i(), r("ul", z5, [t("li", P5, [T5, t("div", I5, [((c = e.qbittorrent) == null ? void 0 : c.status) == "running" ? (i(), r("span", L5, "\u5DF2\u542F\u52A8")) : (i(), r("span", M5, "\u672A\u542F\u52A8"))])]), ((p = e.qbittorrent) == null ? void 0 : p.status) == "running" ? (i(), r(L, {
                        key: 0
                    }, [t("li", O5, [N5, t("div", q5, [t("a", {
                        target: "_blank",
                        href: "/cgi-bin/luci/admin/services/linkease/file/?path=/root" + ((f = e.qbittorrent) == null ? void 0 : f.downloadPath)
                    }, h((d = e.qbittorrent) == null ? void 0 : d.downloadPath), 9, V5)])]), t("li", G5, [j5, t("div", R5, [t("a", {
                        href: w(o),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, h(w(o)), 9, U5)])]), W5], 64)) : C("", !0)])
                }
            }
        });
    var Z5 = Y(H5, [
        ["__scopeId", "data-v-1af61e64"]
    ]);
    const ze = e => (O("data-v-31717210"), e = e(), N(), e),
        J5 = {
            class: "app-container_transmission"
        },
        X5 = {
            class: "transmission-item"
        },
        K5 = ze(() => t("div", {
            class: "transmission-item_name"
        }, [t("span", null, "\u5F53\u524D\u72B6\u6001:")], -1)),
        Q5 = {
            class: "transmission-item_value"
        },
        t3 = {
            key: 0,
            class: "configure"
        },
        e3 = {
            key: 1,
            class: "configure enabel"
        },
        a3 = {
            class: "transmission-item"
        },
        o3 = ze(() => t("div", {
            class: "transmission-item_name"
        }, [t("span", null, "\u4E0B\u8F7D\u76EE\u5F55:")], -1)),
        n3 = {
            class: "transmission-item_value"
        },
        i3 = ["href"],
        r3 = {
            class: "transmission-item"
        },
        s3 = ze(() => t("div", {
            class: "transmission-item_name"
        }, [t("span", null, "\u7F51\u7EDC\u5730\u5740:")], -1)),
        d3 = {
            class: "transmission-item_value"
        },
        u3 = ["href"],
        l3 = P({
            props: {
                transmission: {
                    type: Object
                }
            },
            setup(e) {
                const a = e,
                    o = R(() => {
                        var n;
                        return `http://${location.hostname}${(n=a.transmission)==null?void 0:n.webPath}`
                    });
                return (n, s) => {
                    var c, p, f, d;
                    return i(), r("ul", J5, [t("li", X5, [K5, t("div", Q5, [((c = e.transmission) == null ? void 0 : c.status) == "running" ? (i(), r("span", t3, "\u5DF2\u542F\u52A8")) : (i(), r("span", e3, "\u672A\u542F\u52A8"))])]), ((p = e.transmission) == null ? void 0 : p.status) == "running" ? (i(), r(L, {
                        key: 0
                    }, [t("li", a3, [o3, t("div", n3, [t("a", {
                        target: "_blank",
                        href: "/cgi-bin/luci/admin/services/linkease/file/?path=/root" + ((f = e.transmission) == null ? void 0 : f.downloadPath)
                    }, h((d = e.transmission) == null ? void 0 : d.downloadPath), 9, i3)])]), t("li", r3, [s3, t("div", d3, [t("a", {
                        href: w(o),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, h(w(o)), 9, u3)])])], 64)) : C("", !0)])
                }
            }
        });
    var c3 = Y(l3, [
        ["__scopeId", "data-v-31717210"]
    ]);
    const p3 = {},
        f3 = {
            width: "14px",
            height: "14px",
            viewBox: "0 0 14 14",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        m3 = t("path", {
            d: "M7,0.875 C3.61757813,0.875 0.875,3.61757813 0.875,7 C0.875,10.3824219 3.61757813,13.125 7,13.125 C10.3824219,13.125 13.125,10.3824219 13.125,7 C13.125,3.61757813 10.3824219,0.875 7,0.875 Z M6.5625,4.046875 C6.5625,3.98671875 6.61171875,3.9375 6.671875,3.9375 L7.328125,3.9375 C7.38828125,3.9375 7.4375,3.98671875 7.4375,4.046875 L7.4375,7.765625 C7.4375,7.82578125 7.38828125,7.875 7.328125,7.875 L6.671875,7.875 C6.61171875,7.875 6.5625,7.82578125 6.5625,7.765625 L6.5625,4.046875 Z M7,10.0625 C6.63769531,10.0625 6.34375,9.76855469 6.34375,9.40625 C6.34375,9.04394531 6.63769531,8.75 7,8.75 C7.36230469,8.75 7.65625,9.04394531 7.65625,9.40625 C7.65625,9.76855469 7.36230469,10.0625 7,10.0625 Z",
            id: "\u5F62\u72B6",
            "fill-opacity": "0.65"
        }, null, -1),
        b3 = [m3];

    function v3(e, a) {
        return i(), r("svg", f3, b3)
    }
    var Pt = Y(p3, [
        ["render", v3]
    ]);
    const K = e => (O("data-v-378dba8e"), e = e(), N(), e),
        g3 = {
            key: 0,
            class: "action"
        },
        _3 = K(() => t("h2", {
            class: "title"
        }, "\u4E0B\u8F7D\u670D\u52A1\u914D\u7F6E\u5411\u5BFC", -1)),
        h3 = {
            class: "load_service input_row"
        },
        x3 = K(() => t("div", {
            class: "left"
        }, [t("span", null, "\u4E0B\u8F7D\u670D\u52A1\uFF1A")], -1)),
        k3 = {
            class: "radios"
        },
        w3 = K(() => t("label", {
            for: "Aria2"
        }, "Aria2", -1)),
        y3 = {
            class: "radios"
        },
        F3 = K(() => t("label", {
            for: "qB"
        }, "qBittorrent", -1)),
        E3 = {
            class: "radios"
        },
        C3 = K(() => t("label", {
            for: "Tr"
        }, "Transmission", -1)),
        $3 = ["onSubmit"],
        D3 = {
            class: "input_row"
        },
        B3 = {
            class: "left"
        },
        Y3 = {
            class: "tooltip-trigger"
        },
        A3 = K(() => t("div", null, [t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("span", {
            class: "dowload_dir_tip"
        }, "\u7528\u4E8E\u653E\u7F6E\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1A/mnt/sda1/Configs/aria2\uFF1B\u8BF7\u52FF\u4F7F\u7528 /tmp \u6216 /var \uFF0C\u4EE5\u514D\u91CD\u542F\u4EE5\u540E\u4EFB\u52A1\u4E22\u5931")])], -1)),
        S3 = K(() => t("span", null, "\u914D\u7F6E\u76EE\u5F55\uFF1A", -1)),
        z3 = {
            class: "myinput_wrap"
        },
        P3 = {
            class: "input_row"
        },
        T3 = {
            class: "left"
        },
        I3 = {
            class: "tooltip-trigger"
        },
        L3 = K(() => t("div", null, [t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("span", {
            class: "dowload_dir_tip"
        }, "\u7528\u4E8E\u653E\u7F6E\u4E0B\u8F7D\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1A/mnt/sda1/download")])], -1)),
        M3 = K(() => t("span", null, "\u4E0B\u8F7D\u76EE\u5F55\uFF1A", -1)),
        O3 = {
            class: "myinput_wrap"
        },
        N3 = {
            class: "input_row"
        },
        q3 = {
            class: "left"
        },
        V3 = {
            class: "tooltip-trigger"
        },
        G3 = K(() => t("div", null, [t("div", {
            class: "tooltip-text tooltip-bottom"
        }, [t("span", {
            class: "dowload_rpc_tip"
        }, "\u7528\u4E8E\u8FDC\u7A0B\u8BBF\u95EE\u7684\u4EE4\u724C\u3002")])], -1)),
        j3 = K(() => t("span", null, "RPC \u4EE4\u724C\uFF1A", -1)),
        R3 = {
            class: "input_row"
        },
        U3 = K(() => t("div", {
            class: ""
        }, [t("span", null, "\u9644\u52A0\u7684 BT Tracker\uFF1A")], -1)),
        W3 = {
            class: "radios"
        },
        H3 = K(() => t("label", {
            for: "default"
        }, "\u9ED8\u8BA4", -1)),
        Z3 = {
            class: "radios"
        },
        J3 = K(() => t("label", {
            for: "add"
        }, "\u81EA\u5DF1\u6DFB\u52A0", -1)),
        X3 = {
            class: "input_row"
        },
        K3 = K(() => t("div", {
            class: "left"
        }, null, -1)),
        Q3 = {
            class: "myinput_wrap Tracker_input"
        },
        t4 = ["onSubmit"],
        e4 = {
            class: "input_row"
        },
        a4 = {
            class: "left"
        },
        o4 = {
            class: "tooltip-trigger"
        },
        n4 = K(() => t("div", null, [t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("span", {
            class: "dowload_dir_tip"
        }, "\u7528\u4E8E\u653E\u7F6E\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1A/mnt/sda1/Configs/qb\uFF1B\u8BF7\u52FF\u4F7F\u7528 /tmp \u6216 /var \uFF0C\u4EE5\u514D\u91CD\u542F\u4EE5\u540E\u4EFB\u52A1\u4E22\u5931")])], -1)),
        i4 = K(() => t("span", null, "\u914D\u7F6E\u76EE\u5F55\uFF1A", -1)),
        r4 = {
            class: "myinput_wrap"
        },
        s4 = {
            class: "input_row"
        },
        d4 = {
            class: "left"
        },
        u4 = {
            class: "tooltip-trigger"
        },
        l4 = K(() => t("div", null, [t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("span", {
            class: "dowload_dir_tip"
        }, "\u7528\u4E8E\u653E\u7F6E\u4E0B\u8F7D\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1A/mnt/sda1/download")])], -1)),
        c4 = K(() => t("span", null, "\u4E0B\u8F7D\u76EE\u5F55\uFF1A", -1)),
        p4 = {
            class: "myinput_wrap"
        },
        f4 = ["onSubmit"],
        m4 = {
            class: "input_row"
        },
        b4 = {
            class: "left"
        },
        v4 = {
            class: "tooltip-trigger"
        },
        g4 = K(() => t("div", null, [t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("span", {
            class: "dowload_dir_tip"
        }, "\u7528\u4E8E\u653E\u7F6E\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1A/mnt/sda1/Configs/tr\uFF1B\u8BF7\u52FF\u4F7F\u7528 /tmp \u6216 /var \uFF0C\u4EE5\u514D\u91CD\u542F\u4EE5\u540E\u4EFB\u52A1\u4E22\u5931")])], -1)),
        _4 = K(() => t("span", null, "\u914D\u7F6E\u76EE\u5F55\uFF1A", -1)),
        h4 = {
            class: "myinput_wrap"
        },
        x4 = {
            class: "input_row"
        },
        k4 = {
            class: "left"
        },
        w4 = {
            class: "tooltip-trigger"
        },
        y4 = K(() => t("div", null, [t("div", {
            class: "tooltip-text tooltip-top"
        }, [t("span", {
            class: "dowload_dir_tip"
        }, "\u7528\u4E8E\u653E\u7F6E\u4E0B\u8F7D\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1A/mnt/sda1/download")])], -1)),
        F4 = K(() => t("span", null, "\u4E0B\u8F7D\u76EE\u5F55\uFF1A", -1)),
        E4 = {
            class: "myinput_wrap"
        },
        C4 = {
            class: "btns"
        },
        $4 = {
            key: 1,
            class: "action"
        },
        D4 = {
            class: "title"
        },
        B4 = {
            class: "finished"
        },
        Y4 = K(() => t("p", {
            class: "successed"
        }, "\u914D\u7F6E\u6210\u529F\uFF01", -1)),
        A4 = P({
            props: {
                services: {
                    type: Object,
                    required: !0
                },
                partitionList: {
                    type: Array,
                    required: !0
                },
                defaultTab: {
                    type: String,
                    required: !1
                },
                Close: Function
            },
            setup(e) {
                const a = e,
                    o = y(""),
                    n = y(""),
                    s = y(""),
                    c = y(""),
                    p = y("default"),
                    f = y("Aria2"),
                    d = y(""),
                    l = y(""),
                    u = y(""),
                    m = y(""),
                    b = y([]),
                    _ = y([]),
                    v = y(0);
                Ft(() => {
                    var G, Z, ht, Ie, Le, Me, Oe, Ne, qe, Ve;
                    switch (a.defaultTab) {
                        case "aria2":
                            f.value = "Aria2";
                            break;
                        case "qbittorrent":
                            f.value = "qBittorrent";
                            break;
                        case "transmission":
                            f.value = "Transmission";
                            break
                    }
                    b.value = a.partitionList.map(Ht => ({
                        key: Ht
                    })), _.value = a.partitionList.filter(Ht => Ht.startsWith("/mnt/")).map(Ht => Ht.replace(/(\/mnt\/[^/]+).*/, "$1")), s.value = ((G = a.services.aria2) == null ? void 0 : G.configPath) || "";
                    const B = ((Z = a.services.aria2) == null ? void 0 : Z.downloadPath) || ((ht = a.services.qbittorrent) == null ? void 0 : ht.downloadPath) || ((Ie = a.services.transmission) == null ? void 0 : Ie.downloadPath);
                    B && (c.value = B);
                    const $ = (Le = a.services.aria2) == null ? void 0 : Le.rpcToken;
                    $ && (o.value = $), d.value = ((Me = a.services.qbittorrent) == null ? void 0 : Me.configPath) || "";
                    const q = ((Oe = a.services.qbittorrent) == null ? void 0 : Oe.downloadPath) || B || ((Ne = a.services.transmission) == null ? void 0 : Ne.downloadPath);
                    q && (l.value = q), u.value = ((qe = a.services.transmission) == null ? void 0 : qe.configPath) || "";
                    const H = ((Ve = a.services.transmission) == null ? void 0 : Ve.downloadPath) || B || q;
                    H && (m.value = H)
                });
                const g = () => {
                        let B = s.value,
                            $ = c.value;
                        B == null || B == "" || $ == null || $ == "" || T(this, null, function* () {
                            if (yield ct.checkAndInstallApp("app-meta-aria2", "Aria2")) {
                                const H = F.Loading("\u914D\u7F6E\u4E2D...");
                                S.Guide.Aria2Init.POST({
                                    configPath: B,
                                    downloadPath: $,
                                    rpcToken: o.value,
                                    btTracker: p.value == "add" ? n.value : ""
                                }).then(G => {
                                    var Z;
                                    if (G != null && G.data) {
                                        if ((G.data.success || 0) == 0) {
                                            v.value = 1;
                                            return
                                        } else if ((Z = G.data) != null && Z.error) throw G.data.error
                                    }
                                    throw "\u672A\u77E5\u9519\u8BEF"
                                }).catch(G => F.Error(G)).finally(() => H.Close())
                            }
                        })
                    },
                    k = () => {
                        let B = d.value,
                            $ = l.value;
                        B == null || B == "" || $ == null || $ == "" || T(this, null, function* () {
                            if (yield ct.checkAndInstallApp("app-meta-qbittorrent", "qBittorrent")) {
                                const H = F.Loading("\u914D\u7F6E\u4E2D...");
                                S.Guide.qbitorrentInit.POST({
                                    configPath: B,
                                    downloadPath: $
                                }).then(G => {
                                    var Z;
                                    if (G != null && G.data) {
                                        if ((G.data.success || 0) == 0) {
                                            v.value = 1;
                                            return
                                        } else if ((Z = G.data) != null && Z.error) throw G.data.error
                                    }
                                    throw "\u672A\u77E5\u9519\u8BEF"
                                }).catch(G => F.Error(G)).finally(() => H.Close())
                            }
                        })
                    },
                    x = () => {
                        let B = u.value,
                            $ = m.value;
                        B == null || B == "" || $ == null || $ == "" || T(this, null, function* () {
                            if (yield ct.checkAndInstallApp("app-meta-transmission", "Transmission")) {
                                const H = F.Loading("\u914D\u7F6E\u4E2D...");
                                S.Guide.transmissionInit.POST({
                                    configPath: B,
                                    downloadPath: $
                                }).then(G => {
                                    var Z;
                                    if (G != null && G.data) {
                                        if ((G.data.success || 0) == 0) {
                                            v.value = 1;
                                            return
                                        } else if ((Z = G.data) != null && Z.error) throw G.data.error
                                    }
                                    throw "\u672A\u77E5\u9519\u8BEF"
                                }).catch(G => F.Error(G)).finally(() => H.Close())
                            }
                        })
                    },
                    E = B => {
                        B.preventDefault(), a.Close && a.Close()
                    },
                    A = B => {
                        B.preventDefault(), location.reload()
                    };
                return (B, $) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => [v.value == 0 ? (i(), r("div", g3, [_3, t("ul", null, [t("li", null, [t("div", h3, [x3, t("div", k3, [z(t("input", {
                        type: "radio",
                        value: "Aria2",
                        "onUpdate:modelValue": $[0] || ($[0] = q => f.value = q),
                        name: "download",
                        id: "Aria2"
                    }, null, 512), [
                        [ft, f.value]
                    ]), w3]), t("div", y3, [z(t("input", {
                        type: "radio",
                        value: "qBittorrent",
                        "onUpdate:modelValue": $[1] || ($[1] = q => f.value = q),
                        name: "download",
                        id: "qB"
                    }, null, 512), [
                        [ft, f.value]
                    ]), F3]), t("div", E3, [z(t("input", {
                        type: "radio",
                        value: "Transmission",
                        "onUpdate:modelValue": $[2] || ($[2] = q => f.value = q),
                        name: "download",
                        id: "Tr"
                    }, null, 512), [
                        [ft, f.value]
                    ]), C3])])])]), f.value == "Aria2" ? (i(), r("form", {
                        key: 0,
                        onSubmit: nt(g, ["prevent"])
                    }, [t("ul", null, [t("li", null, [t("div", D3, [t("div", B3, [t("span", Y3, [D(Pt), A3]), S3]), t("div", z3, [D(Tt, {
                        modelValue: s.value,
                        "onUpdate:modelValue": $[3] || ($[3] = q => s.value = q),
                        modelModifiers: {
                            trim: !0
                        },
                        title: "\u914D\u7F6E\u76EE\u5F55",
                        options: _.value.concat("/root").map(q => ({
                            key: q + "/Configs/aria2"
                        }))
                    }, null, 8, ["modelValue", "options"])])])]), t("li", null, [t("div", P3, [t("div", T3, [t("span", I3, [D(Pt), L3]), M3]), t("div", O3, [D(Tt, {
                        modelValue: c.value,
                        "onUpdate:modelValue": $[4] || ($[4] = q => c.value = q),
                        modelModifiers: {
                            trim: !0
                        },
                        title: "\u4E0B\u8F7D\u76EE\u5F55",
                        options: b.value
                    }, null, 8, ["modelValue", "options"])])])]), t("li", null, [t("div", N3, [t("div", q3, [t("span", V3, [D(Pt), G3]), j3]), z(t("input", {
                        type: "text",
                        class: "RPC_input",
                        placeholder: "\u8BF7\u8F93\u5165RPC\u4EE4\u724C",
                        "onUpdate:modelValue": $[5] || ($[5] = q => o.value = q)
                    }, null, 512), [
                        [W, o.value, void 0, {
                            trim: !0
                        }]
                    ])])]), t("li", null, [t("div", R3, [U3, t("div", W3, [z(t("input", {
                        type: "radio",
                        value: "default",
                        name: "BT",
                        id: "default",
                        "onUpdate:modelValue": $[6] || ($[6] = q => p.value = q)
                    }, null, 512), [
                        [ft, p.value]
                    ]), H3]), t("div", Z3, [z(t("input", {
                        type: "radio",
                        value: "add",
                        name: "BT",
                        id: "add",
                        "onUpdate:modelValue": $[7] || ($[7] = q => p.value = q)
                    }, null, 512), [
                        [ft, p.value]
                    ]), J3])])]), t("li", null, [t("div", X3, [K3, t("div", Q3, [p.value == "add" ? z((i(), r("textarea", {
                        key: 0,
                        "onUpdate:modelValue": $[8] || ($[8] = q => n.value = q),
                        rows: "4",
                        placeholder: "\u8BF7\u8F93\u5165BT Tracker\u670D\u52A1\u5668\u5730\u5740\uFF0C\u591A\u4E2A\u5730\u5740\u4F7F\u7528\u6362\u884C\u6216\u8005\u82F1\u6587\u9017\u53F7\u5206\u9694"
                    }, null, 512)), [
                        [W, n.value, void 0, {
                            trim: !0
                        }]
                    ]) : C("", !0)])])])])], 40, $3)) : C("", !0), f.value == "qBittorrent" ? (i(), r("form", {
                        key: 1,
                        onSubmit: nt(k, ["prevent"])
                    }, [t("ul", null, [t("li", null, [t("div", e4, [t("div", a4, [t("span", o4, [D(Pt), n4]), i4]), t("div", r4, [D(Tt, {
                        modelValue: d.value,
                        "onUpdate:modelValue": $[9] || ($[9] = q => d.value = q),
                        modelModifiers: {
                            trim: !0
                        },
                        title: "\u914D\u7F6E\u76EE\u5F55",
                        options: _.value.concat("/root").map(q => ({
                            key: q + "/Configs/qb"
                        }))
                    }, null, 8, ["modelValue", "options"])])])]), t("li", null, [t("div", s4, [t("div", d4, [t("span", u4, [D(Pt), l4]), c4]), t("div", p4, [D(Tt, {
                        modelValue: l.value,
                        "onUpdate:modelValue": $[10] || ($[10] = q => l.value = q),
                        modelModifiers: {
                            trim: !0
                        },
                        title: "\u4E0B\u8F7D\u76EE\u5F55",
                        options: b.value
                    }, null, 8, ["modelValue", "options"])])])])])], 40, t4)) : C("", !0), f.value == "Transmission" ? (i(), r("form", {
                        key: 2,
                        onSubmit: nt(x, ["prevent"])
                    }, [t("ul", null, [t("li", null, [t("div", m4, [t("div", b4, [t("span", v4, [D(Pt), g4]), _4]), t("div", h4, [D(Tt, {
                        modelValue: u.value,
                        "onUpdate:modelValue": $[11] || ($[11] = q => u.value = q),
                        modelModifiers: {
                            trim: !0
                        },
                        title: "\u914D\u7F6E\u76EE\u5F55",
                        options: _.value.concat("/root").map(q => ({
                            key: q + "/Configs/transmission"
                        }))
                    }, null, 8, ["modelValue", "options"])])])]), t("li", null, [t("div", x4, [t("div", k4, [t("span", w4, [D(Pt), y4]), F4]), t("div", E4, [D(Tt, {
                        modelValue: m.value,
                        "onUpdate:modelValue": $[12] || ($[12] = q => m.value = q),
                        modelModifiers: {
                            trim: !0
                        },
                        title: "\u4E0B\u8F7D\u76EE\u5F55",
                        options: b.value
                    }, null, 8, ["modelValue", "options"])])])])])], 40, f4)) : C("", !0), t("div", C4, [f.value == "Aria2" ? (i(), r("button", {
                        key: 0,
                        class: "cbi-button cbi-button-apply",
                        onClick: g
                    }, "\u542F\u7528")) : C("", !0), f.value == "qBittorrent" ? (i(), r("button", {
                        key: 1,
                        class: "cbi-button cbi-button-apply",
                        onClick: k
                    }, "\u542F\u7528")) : C("", !0), f.value == "Transmission" ? (i(), r("button", {
                        key: 2,
                        class: "cbi-button cbi-button-apply",
                        onClick: x
                    }, "\u542F\u7528")) : C("", !0), t("button", {
                        class: "cbi-button cbi-button-remove app-btn app-back",
                        onClick: E
                    }, "\u53D6\u6D88")])])) : v.value == 1 ? (i(), r("div", $4, [t("h2", D4, h(f.value) + "\u4E0B\u8F7D\u670D\u52A1\u914D\u7F6E\u5411\u5BFC", 1), t("div", B4, [D(De)]), Y4, t("div", {
                        class: "btns"
                    }, [t("button", {
                        class: "cbi-button cbi-button-apply",
                        onClick: A
                    }, "\u786E\u5B9A")])])) : C("", !0)]),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var S4 = Y(A4, [
        ["__scopeId", "data-v-378dba8e"]
    ]);
    const z4 = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(S4, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        },
        P4 = e => (O("data-v-23580536"), e = e(), N(), e),
        T4 = {
            class: "app-container"
        },
        I4 = {
            class: "app-container_title"
        },
        L4 = P4(() => t("span", null, "\u4E0B\u8F7D\u670D\u52A1", -1)),
        M4 = {
            class: "app-container_tool"
        },
        O4 = ["disabled"],
        N4 = {
            class: "more_icon",
            title: "\u67E5\u770B\u9AD8\u7EA7\u914D\u7F6E"
        },
        q4 = {
            class: "DeviceBlock"
        },
        V4 = {
            class: "app-container_body"
        },
        G4 = {
            class: "app-container_nas-menu"
        },
        j4 = P({
            setup(e) {
                y(!1);
                const a = y("aria2"),
                    o = y();
                Qe(), setTimeout(() => {
                    S.Guide.DownloadService.Status.GET().then(b => {
                        var _;
                        if ((_ = b == null ? void 0 : b.data) != null && _.result) {
                            const v = b.data.result;
                            o.value = v
                        }
                    })
                }, 800);
                const s = y(!1),
                    c = y(!1),
                    p = () => {
                        c.value = !c.value
                    },
                    f = () => {
                        S.Guide.DownloadPartition.List.GET().then(b => {
                            var v, g;
                            let _ = [];
                            (g = (v = b == null ? void 0 : b.data) == null ? void 0 : v.result) != null && g.partitionList && (_ = b.data.result.partitionList), z4({
                                services: o.value,
                                partitionList: _,
                                defaultTab: a.value
                            })
                        })
                    },
                    d = (b, _, v) => T(this, null, function* () {
                        p(), ct.installAndGo(b, _, v)
                    }),
                    l = () => {
                        d("app-meta-aria2", "Aria2", "/cgi-bin/luci/admin/services/aria2")
                    },
                    u = () => {
                        d("app-meta-qbittorrent", "qBittorrent", "/cgi-bin/luci/admin/nas/qBittorrent")
                    },
                    m = () => {
                        d("app-meta-transmission", "Transmission", "/cgi-bin/luci/admin/services/transmission")
                    };
                return (b, _) => {
                    var g, k, x;
                    const v = X("GlHelp");
                    return i(), r("div", T4, [t("div", I4, [t("span", null, [L4, D(v, {
                        type: "download"
                    })]), t("div", M4, [o.value ? (i(), r("div", {
                        key: 0,
                        class: "app-container_configure",
                        onClick: f,
                        disabled: s.value
                    }, "\u5FEB\u901F\u914D\u7F6E ", 8, O4)) : C("", !0), t("span", N4, [D($t, {
                        onClick: p
                    })])]), z(t("div", q4, [t("div", {
                        class: "menu_background",
                        onClick: p
                    }), t("ul", null, [t("li", null, [t("a", {
                        onClick: l
                    }, "Aria2\u9AD8\u7EA7\u914D\u7F6E")]), t("li", null, [t("a", {
                        onClick: u
                    }, "qBittorrent\u9AD8\u7EA7\u914D\u7F6E")]), t("li", null, [t("a", {
                        onClick: m
                    }, "Transmission\u9AD8\u7EA7\u914D\u7F6E")])])], 512), [
                        [wt, c.value]
                    ])]), t("div", V4, [t("ul", G4, [t("button", {
                        onClick: _[0] || (_[0] = E => a.value = "aria2"),
                        class: ot({
                            on: a.value == "aria2"
                        })
                    }, "Aria2", 2), t("button", {
                        onClick: _[1] || (_[1] = E => a.value = "qbittorrent"),
                        class: ot({
                            on: a.value == "qbittorrent"
                        })
                    }, "qBittorrent", 2), t("button", {
                        onClick: _[2] || (_[2] = E => a.value = "transmission"),
                        class: ot({
                            on: a.value == "transmission"
                        })
                    }, "Transmission", 2)]), a.value == "aria2" ? (i(), M(S5, {
                        key: 0,
                        aria2: (g = o.value) == null ? void 0 : g.aria2
                    }, null, 8, ["aria2"])) : a.value == "qbittorrent" ? (i(), M(Z5, {
                        key: 1,
                        qbittorrent: (k = o.value) == null ? void 0 : k.qbittorrent
                    }, null, 8, ["qbittorrent"])) : a.value == "transmission" ? (i(), M(c3, {
                        key: 2,
                        transmission: (x = o.value) == null ? void 0 : x.transmission
                    }, null, 8, ["transmission"])) : C("", !0)])])
                }
            }
        });
    var R4 = Y(j4, [
        ["__scopeId", "data-v-23580536"]
    ]);
    const Et = e => (O("data-v-43beecef"), e = e(), N(), e),
        U4 = {
            class: "actioner-container"
        },
        W4 = Et(() => t("div", {
            class: "actioner-container_header"
        }, [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")], -1)),
        H4 = {
            class: "actioner-container_body"
        },
        Z4 = {
            class: "label-item"
        },
        J4 = Et(() => t("span", null, "DDNSTO", -1)),
        X4 = Et(() => t("p", {
            class: "label_info"
        }, "DDNSTO \u662F\u4E00\u4E2A\u4E0D\u9700\u8981\u516C\u7F51IP\u4E5F\u53EF\u4EE5\u5728\u5916\u7F51\u8BBF\u95EE\u7684\u7A7F\u900F\u57DF\u540D\u670D\u52A1\uFF0C\u4E00\u4E2A\u6D4F\u89C8\u5668\u641E\u5B9A\u5185\u7F51\u7A7F\u900F\uFF0C\u8FDC\u7A0B\u8BBF\u95EEOpenwrt\u3001\u8FDC\u7A0B\u7EC8\u7AEF\u3001\u8FDC\u7A0B\u684C\u9762...", -1)),
        K4 = {
            class: "label-item"
        },
        Q4 = Et(() => t("span", null, "\u963F\u91CC\u4E91", -1)),
        t8 = Et(() => t("p", {
            class: "label_info"
        }, " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ", -1)),
        e8 = {
            class: "label-item"
        },
        a8 = Et(() => t("span", null, "Dnspod", -1)),
        o8 = Et(() => t("p", {
            class: "label_info"
        }, " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ", -1)),
        n8 = {
            class: "label-item"
        },
        i8 = Et(() => t("span", null, "\u82B1\u751F\u58F3", -1)),
        r8 = Et(() => t("p", {
            class: "label_info"
        }, " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ", -1)),
        s8 = P({
            props: {
                onSetup: {
                    type: Function,
                    required: !0
                },
                active: {
                    type: String,
                    default: "ddnsto"
                }
            },
            emits: ["update:active"],
            setup(e, {
                emit: a
            }) {
                const o = e,
                    n = () => {
                        o.onSetup()
                    },
                    s = y(o.active),
                    c = () => {
                        switch (a("update:active", s.value), s.value) {
                            case "ddnsto":
                                o.onSetup("ddnsto");
                                break;
                            case "ali":
                                o.onSetup("ddns-ali");
                                break;
                            case "dnspod":
                                o.onSetup("ddns-dnspod");
                                break;
                            case "oray":
                                o.onSetup("ddns-oray");
                                break
                        }
                    };
                return (p, f) => (i(), r("div", U4, [W4, t("div", H4, [t("div", Z4, [t("label", null, [z(t("input", {
                    type: "radio",
                    "onUpdate:modelValue": f[0] || (f[0] = d => s.value = d),
                    value: "ddnsto"
                }, null, 512), [
                    [ft, s.value]
                ]), J4]), X4]), t("div", K4, [t("label", null, [z(t("input", {
                    type: "radio",
                    "onUpdate:modelValue": f[1] || (f[1] = d => s.value = d),
                    value: "ali"
                }, null, 512), [
                    [ft, s.value]
                ]), Q4]), t8]), t("div", e8, [t("label", null, [z(t("input", {
                    type: "radio",
                    "onUpdate:modelValue": f[2] || (f[2] = d => s.value = d),
                    value: "dnspod"
                }, null, 512), [
                    [ft, s.value]
                ]), a8]), o8]), t("div", n8, [t("label", null, [z(t("input", {
                    type: "radio",
                    "onUpdate:modelValue": f[3] || (f[3] = d => s.value = d),
                    value: "oray"
                }, null, 512), [
                    [ft, s.value]
                ]), i8]), r8])]), t("div", {
                    class: "actioner-container_footer"
                }, [t("div", {
                    class: "close",
                    onClick: n
                }, "\u53D6\u6D88"), t("div", {
                    class: "next",
                    onClick: c
                }, "\u4E0B\u4E00\u6B65")])]))
            }
        });
    var d8 = Y(s8, [
        ["__scopeId", "data-v-43beecef"]
    ]);
    const ne = e => (O("data-v-43dd65a2"), e = e(), N(), e),
        u8 = {
            class: "actioner-container"
        },
        l8 = {
            class: "actioner-container_body"
        },
        c8 = ne(() => t("svg", {
            t: "1642063181211",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "5062",
            width: "128",
            height: "128",
            "data-v-cda444e0": ""
        }, [t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063",
            "data-v-cda444e0": ""
        })], -1)),
        p8 = ne(() => t("div", {
            class: "body-title"
        }, "\u6DFB\u52A0\u6210\u529F", -1)),
        f8 = ne(() => t("p", {
            class: "body-tips"
        }, "\u8BF7\u7A0D\u7B491\u5206\u949F\u751F\u6548\u540E\u518D\u4F7F\u7528\u3002", -1)),
        m8 = {
            class: "body-info"
        },
        b8 = ne(() => t("span", null, "\u8BBF\u95EE\u5730\u5740\uFF1A", -1)),
        v8 = ["href"],
        g8 = ne(() => t("div", null, [t("span", null, "\u53EF\u524D\u5F80"), t("a", {
            href: "/cgi-bin/luci/admin/services/ddns",
            target: "_blank"
        }, "\u670D\u52A1-\u52A8\u6001DNS"), t("span", null, "\u67E5\u770B\u66F4\u591A\u8BE6\u60C5")], -1)),
        _8 = P({
            props: {
                target: {
                    type: String,
                    required: !0
                },
                onSetup: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = () => {
                    location.reload()
                };
                return (o, n) => (i(), r("div", u8, [t("div", l8, [c8, p8, f8, t("div", m8, [b8, t("a", {
                    href: e.target,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, h(e.target), 9, v8)]), g8]), t("div", {
                    class: "actioner-container_footer"
                }, [t("div", {
                    class: "close",
                    onClick: a
                }, "\u5173\u95ED")])]))
            }
        });
    var h8 = Y(_8, [
        ["__scopeId", "data-v-43dd65a2"]
    ]);
    const ma = e => (O("data-v-7790f1da"), e = e(), N(), e),
        x8 = {
            class: "actioner-container"
        },
        k8 = ma(() => t("div", {
            class: "actioner-container_header"
        }, [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")], -1)),
        w8 = ma(() => t("div", {
            class: "actioner-container_body ddnsto-login"
        }, [t("iframe", {
            src: "https://www.kooldns.cn/bind/#/auth?send=1&source=openwrt&callback=*"
        })], -1)),
        y8 = P({
            props: {
                onSetup: {
                    type: Function,
                    required: !0
                },
                onDdnstoConfig: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = () => {
                        a.onSetup()
                    },
                    n = s => {
                        if (s.data.auth == "ddnsto") {
                            const c = s.data.sign,
                                p = s.data.token;
                            c && p && (removeEventListener("message", n), a.onDdnstoConfig(c, p), a.onSetup("ddnsto-run"))
                        }
                    };
                return Ft(() => {
                    window.addEventListener("message", n)
                }), Gt(() => {
                    removeEventListener("message", n)
                }), (s, c) => (i(), r("div", x8, [k8, w8, t("div", {
                    class: "actioner-container_footer"
                }, [t("div", {
                    class: "close",
                    onClick: o
                }, "\u53D6\u6D88")])]))
            }
        });
    var F8 = Y(y8, [
        ["__scopeId", "data-v-7790f1da"]
    ]);
    const E8 = e => (O("data-v-7b3ee72a"), e = e(), N(), e),
        C8 = {
            class: "actioner-container"
        },
        $8 = E8(() => t("div", {
            class: "actioner-container_header"
        }, [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")], -1)),
        D8 = {
            class: "actioner-container_body ddnsto-bind"
        },
        B8 = ["src"],
        Y8 = P({
            props: {
                onSetup: {
                    type: Function,
                    required: !0
                },
                config: {
                    type: Object,
                    required: !0
                },
                domain: {
                    type: String,
                    required: !0
                }
            },
            emits: ["update:domain"],
            setup(e, {
                emit: a
            }) {
                const o = e,
                    n = R(() => {
                        const {
                            domain: p,
                            token: f,
                            sign: d,
                            routerId: l,
                            netaddr: u
                        } = o.config, m = encodeURIComponent(p), b = encodeURIComponent(u);
                        return `https://www.kooldns.cn/bind/#/domain?domain=${m}&sign=${d}&token=${f}&routerId=${l}&netaddr=${b}`
                    }),
                    s = p => {
                        if (p.data) {
                            const {
                                auth: f,
                                url: d
                            } = p.data;
                            f === "ddnsto" && d && c(d)
                        }
                    },
                    c = p => T(this, null, function* () {
                        var f;
                        try {
                            const d = yield S.Guide.DdnstoAddress.POST({
                                address: p
                            });
                            d != null && d.data && (((f = d == null ? void 0 : d.data) == null ? void 0 : f.success) || 0) == 0 && (a("update:domain", p), o.onSetup("ddnsto-save"))
                        } catch (d) {}
                    });
                return Ft(() => {
                    window.addEventListener("message", s)
                }), Gt(() => {
                    removeEventListener("message", s)
                }), (p, f) => (i(), r("div", C8, [$8, t("div", D8, [t("iframe", {
                    src: w(n)
                }, null, 8, B8)])]))
            }
        });
    var A8 = Y(Y8, [
        ["__scopeId", "data-v-7b3ee72a"]
    ]);
    const ie = e => (O("data-v-7f5a8953"), e = e(), N(), e),
        S8 = {
            class: "actioner-container"
        },
        z8 = {
            class: "actioner-container_body"
        },
        P8 = ie(() => t("svg", {
            t: "1642063181211",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "5062",
            width: "128",
            height: "128",
            "data-v-cda444e0": ""
        }, [t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063",
            "data-v-cda444e0": ""
        })], -1)),
        T8 = ie(() => t("div", {
            class: "body-title"
        }, "\u6DFB\u52A0\u6210\u529F", -1)),
        I8 = ie(() => t("p", {
            class: "body-tips"
        }, "\u8BF7\u7A0D\u7B491\u5206\u949F\u751F\u6548\u540E\u518D\u4F7F\u7528\u3002", -1)),
        L8 = {
            class: "body-info"
        },
        M8 = ie(() => t("span", null, "\u8BBF\u95EE\u5730\u5740\uFF1A", -1)),
        O8 = ["href"],
        N8 = ie(() => t("div", null, [t("span", null, "\u53EF\u524D\u5F80"), t("a", {
            href: "https://www.ddnsto.com/app/#/devices",
            target: "_blank"
        }, "DDNSTO\u63A7\u5236\u53F0"), t("span", null, "\u67E5\u770B\u66F4\u591A\u8BE6\u60C5")], -1)),
        q8 = P({
            props: {
                onSetup: {
                    type: Function,
                    required: !0
                },
                target: {
                    type: String,
                    required: !0
                }
            },
            setup(e) {
                const a = () => {
                    location.reload()
                };
                return (o, n) => (i(), r("div", S8, [t("div", z8, [P8, T8, I8, t("div", L8, [M8, t("a", {
                    href: e.target,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, h(e.target), 9, O8)]), N8]), t("div", {
                    class: "actioner-container_footer"
                }, [t("div", {
                    class: "close",
                    onClick: a
                }, "\u5173\u95ED")])]))
            }
        });
    var V8 = Y(q8, [
        ["__scopeId", "data-v-7f5a8953"]
    ]);
    const G8 = e => (O("data-v-d60389d6"), e = e(), N(), e),
        j8 = {
            class: "actioner-container"
        },
        R8 = G8(() => t("div", {
            class: "actioner-container_header"
        }, [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")], -1)),
        U8 = {
            class: "actioner-container_body"
        },
        W8 = {
            class: "actioner-container_footer"
        },
        H8 = P({
            props: {
                onSetup: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = () => {
                        a.onSetup()
                    },
                    n = () => T(this, null, function* () {
                        if (p.value) return;
                        p.value = !0;
                        const d = F.Loading("\u5B89\u88C5\u4E2D...");
                        try {
                            if (yield ct.installApp("app-meta-ddnsto", 30)) {
                                a.onSetup("ddnsto-login");
                                return
                            } else s.value = "\u5B89\u88C5\u5931\u8D25"
                        } catch (l) {
                            s.value = l
                        } finally {
                            d.Close()
                        }
                        p.value = !1
                    }),
                    s = y("\u6B63\u5728\u68C0\u6D4B\u4E2D..."),
                    c = y(!1),
                    p = y(!1);
                return (() => T(this, null, function* () {
                    try {
                        const d = yield S.App.Check.POST({
                            name: "ddnsto"
                        });
                        if (d != null && d.data) {
                            const {
                                result: l,
                                error: u
                            } = d.data;
                            if (u) {
                                s.value = u;
                                return
                            }
                            if (l) {
                                if (l.status == "installed") {
                                    a.onSetup("ddnsto-login");
                                    return
                                }
                                l.status == "uninstalled" && (s.value = "\u9700\u8981\u5B89\u88C5DDNSTO\u63D2\u4EF6\uFF0C\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u5F00\u59CB\u5B89\u88C5")
                            }
                        }
                    } catch (d) {
                        s.value = d
                    }
                    c.value = !0
                }))(), (d, l) => (i(), r("div", j8, [R8, t("div", U8, [t("span", null, h(s.value), 1)]), t("div", W8, [c.value ? (i(), r(L, {
                    key: 0
                }, [t("div", {
                    class: "close",
                    onClick: o
                }, "\u53D6\u6D88"), t("div", {
                    class: "next",
                    onClick: n
                }, "\u786E\u5B9A")], 64)) : C("", !0)])]))
            }
        });
    var Z8 = Y(H8, [
        ["__scopeId", "data-v-d60389d6"]
    ]);
    const J8 = e => (O("data-v-1e0ebd66"), e = e(), N(), e),
        X8 = {
            class: "actioner-container"
        },
        K8 = J8(() => t("div", {
            class: "actioner-container_header"
        }, [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")], -1)),
        Q8 = {
            class: "actioner-container_body"
        },
        tp = P({
            props: {
                onSetup: {
                    type: Function,
                    required: !0
                },
                token: {
                    type: String,
                    required: !0
                },
                onDdnstoLocalConfig: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y("\u6B63\u5728\u68C0\u6D4B\u63D2\u4EF6\u662F\u5426\u5DF2\u542F\u52A8...");
                (d => T(this, null, function* () {
                    var l;
                    try {
                        const u = yield S.Guide.Ddnsto.POST({
                            token: a.token
                        });
                        u != null && u.data && (u.data.error && (o.value = u.data.error), (((l = u == null ? void 0 : u.data) == null ? void 0 : l.success) || 0) == 0 && c())
                    } catch (u) {
                        o.value = u
                    }
                }))(a.token);
                const s = y(),
                    c = () => {
                        const d = () => T(this, null, function* () {
                            if ((yield p()) === !0) {
                                f();
                                return
                            }
                            s.value = window.setTimeout(d, 2e3)
                        });
                        d()
                    },
                    p = () => T(this, null, function* () {
                        try {
                            const d = yield S.App.Check.POST({
                                name: "ddnsto",
                                checkRunning: !0
                            });
                            if (d != null && d.data) {
                                d.data.error && (o.value = d.data.error);
                                const l = d.data.result;
                                if ((l == null ? void 0 : l.status) == "running") return !0
                            }
                        } catch (d) {
                            o.value = d
                        }
                        return !1
                    });
                Gt(() => {
                    s.value && clearInterval(s.value)
                });
                const f = () => T(this, null, function* () {
                    var d;
                    try {
                        const l = yield S.Guide.DdntoConfig.GET();
                        if (l != null && l.data && (l.data.error && (o.value = l.data.error), (((d = l == null ? void 0 : l.data) == null ? void 0 : d.success) || 0) == 0 && l.data.result)) {
                            const u = l.data.result;
                            a.onDdnstoLocalConfig(u.netAddr, u.deviceId), a.onSetup("ddnsto-bind")
                        }
                    } catch (l) {
                        o.value = l
                    }
                });
                return (d, l) => (i(), r("div", X8, [K8, t("div", Q8, h(o.value), 1)]))
            }
        });
    var ep = Y(tp, [
        ["__scopeId", "data-v-1e0ebd66"]
    ]);
    const ap = {
            class: "action-main"
        },
        op = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                },
                url: {
                    type: String,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y("ddnsto-install"),
                    n = d => {
                        d != null ? o.value = d : s()
                    },
                    s = () => {
                        a.Close && a.Close()
                    },
                    c = it({
                        sign: "",
                        token: "",
                        domain: a.url,
                        netaddr: "",
                        routerId: ""
                    }),
                    p = (d, l) => {
                        c.sign = d, c.token = l
                    },
                    f = (d, l) => {
                        c.netaddr = d, c.routerId = l
                    };
                return (d, l) => (i(), M(et, {
                    type: 1
                }, {
                    default: V(() => [t("div", ap, [o.value == "ddnsto-install" ? (i(), M(Z8, {
                        key: 0,
                        onSetup: n
                    })) : o.value == "ddnsto-login" ? (i(), M(F8, {
                        key: 1,
                        onSetup: n,
                        onDdnstoConfig: p
                    })) : o.value == "ddnsto-run" ? (i(), M(ep, {
                        key: 2,
                        onSetup: n,
                        token: w(c).token,
                        onDdnstoLocalConfig: f
                    }, null, 8, ["token"])) : o.value == "ddnsto-bind" ? (i(), M(A8, {
                        key: 3,
                        onSetup: n,
                        config: {
                            token: w(c).token,
                            sign: w(c).sign,
                            domain: w(c).domain,
                            netaddr: w(c).netaddr,
                            routerId: w(c).routerId
                        },
                        domain: w(c).domain,
                        "onUpdate:domain": l[0] || (l[0] = u => w(c).domain = u)
                    }, null, 8, ["config", "domain"])) : o.value == "ddnsto-save" ? (i(), M(V8, {
                        key: 4,
                        onSetup: n,
                        target: w(c).domain
                    }, null, 8, ["target"])) : C("", !0)])]),
                    _: 1
                }))
            }
        });
    var np = Y(op, [
        ["__scopeId", "data-v-7a6bd385"]
    ]);
    const ip = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(np, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        },
        rp = {
            class: "action"
        },
        sp = {
            class: "action-header"
        },
        dp = ["innerHTML"],
        up = {
            class: "action-footer"
        },
        lp = P({
            props: {
                Close: Function,
                next: {
                    type: Function
                },
                clear: {
                    type: Function
                },
                continuer: {
                    type: Function
                },
                nextTitle: {
                    type: String,
                    default: "\u786E\u5B9A"
                },
                clearTitle: {
                    type: String,
                    default: "\u8FD4\u56DE"
                },
                continuerTitle: {
                    type: String,
                    default: "\u7EE7\u7EED\u4FDD\u5B58"
                },
                title: {
                    type: String,
                    default: "\u63D0\u793A"
                },
                content: {
                    type: String
                }
            },
            setup(e) {
                const a = e,
                    o = () => {
                        a.next && a.next(), a.Close && a.Close()
                    },
                    n = () => {
                        a.clear && a.clear(), a.Close && a.Close()
                    },
                    s = () => {
                        a.continuer && a.continuer(), a.Close && a.Close()
                    };
                return (c, p) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => [t("div", rp, [t("div", sp, h(e.title), 1), t("div", {
                        class: "action-body",
                        innerHTML: e.content
                    }, null, 8, dp), t("div", up, [e.clear ? (i(), r("div", {
                        key: 0,
                        class: "clear",
                        onClick: n
                    }, h(e.clearTitle), 1)) : C("", !0), t("div", {
                        class: "next",
                        onClick: o
                    }, h(e.nextTitle), 1), e.continuer ? (i(), r("div", {
                        key: 1,
                        class: "next",
                        onClick: s
                    }, h(e.continuerTitle), 1)) : C("", !0)])])]),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var cp = Y(lp, [
        ["__scopeId", "data-v-4358e88c"]
    ]);
    const de = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(cp, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        },
        rt = e => (O("data-v-9435cfa6"), e = e(), N(), e),
        pp = {
            class: "actioner-container"
        },
        fp = ["onSubmit"],
        mp = rt(() => t("div", {
            class: "actioner-container_header"
        }, [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")], -1)),
        bp = {
            key: 0,
            class: "title_info"
        },
        vp = rt(() => t("p", null, " \u963F\u91CC\u4E91 ", -1)),
        gp = rt(() => t("span", null, " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ", -1)),
        _p = rt(() => t("a", {
            href: "https://doc.linkease.com/zh/guide/istoreos/basic/domain.html#%E9%98%BF%E9%87%8C%E4%BA%91",
            target: "_blank"
        }, "\u67E5\u770B\u6559\u7A0B>>", -1)),
        hp = [vp, gp, _p],
        xp = {
            key: 1,
            class: "title_info"
        },
        kp = rt(() => t("p", null, " dnspod ", -1)),
        wp = rt(() => t("span", null, " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ", -1)),
        yp = rt(() => t("a", {
            href: "https://doc.linkease.com/zh/guide/istoreos/basic/domain.html#dnspod",
            target: "_blank"
        }, "\u67E5\u770B\u6559\u7A0B>>", -1)),
        Fp = [kp, wp, yp],
        Ep = {
            key: 2,
            class: "title_info"
        },
        Cp = rt(() => t("p", null, " \u82B1\u751F\u58F3 ", -1)),
        $p = rt(() => t("span", null, " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ", -1)),
        Dp = rt(() => t("a", {
            href: "https://doc.linkease.com/zh/guide/istoreos/basic/domain.html#%E8%8A%B1%E7%94%9F%E5%A3%B3",
            target: "_blank"
        }, "\u67E5\u770B\u6559\u7A0B>>", -1)),
        Bp = [Cp, $p, Dp],
        Yp = {
            class: "label-item"
        },
        Ap = rt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "IP\u5730\u5740\u7248\u672C\uFF1A")], -1)),
        Sp = {
            class: "label-item_value"
        },
        zp = rt(() => t("option", {
            value: "ipv4"
        }, "IPv4\u5730\u5740", -1)),
        Pp = rt(() => t("option", {
            value: "ipv6"
        }, "IPv6\u5730\u5740", -1)),
        Tp = [zp, Pp],
        Ip = rt(() => t("div", {
            class: "label_tips"
        }, [t("svg", {
            width: "14px",
            height: "14px",
            viewBox: "0 0 14 14",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, [t("g", {
            id: "icon_alert",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "Icon/Warning"
        }, [t("rect", {
            id: "\u77E9\u5F62",
            fill: "#000000",
            "fill-rule": "nonzero",
            opacity: "0",
            x: "0",
            y: "0",
            width: "14",
            height: "14"
        }), t("path", {
            d: "M7,0.875 C3.61757813,0.875 0.875,3.61757813 0.875,7 C0.875,10.3824219 3.61757813,13.125 7,13.125 C10.3824219,13.125 13.125,10.3824219 13.125,7 C13.125,3.61757813 10.3824219,0.875 7,0.875 Z M6.5625,4.046875 C6.5625,3.98671875 6.61171875,3.9375 6.671875,3.9375 L7.328125,3.9375 C7.38828125,3.9375 7.4375,3.98671875 7.4375,4.046875 L7.4375,7.765625 C7.4375,7.82578125 7.38828125,7.875 7.328125,7.875 L6.671875,7.875 C6.61171875,7.875 6.5625,7.82578125 6.5625,7.765625 L6.5625,4.046875 Z M7,10.0625 C6.63769531,10.0625 6.34375,9.76855469 6.34375,9.40625 C6.34375,9.04394531 6.63769531,8.75 7,8.75 C7.36230469,8.75 7.65625,9.04394531 7.65625,9.40625 C7.65625,9.76855469 7.36230469,10.0625 7,10.0625 Z",
            id: "\u5F62\u72B6",
            fill: "#FAAD14"
        })])])]), t("span", {
            class: "info"
        }, "\u8BBE\u5B9A\u54EA\u4E00\u4E2A IP \u5730\u5740\uFF08IPv4 \u6216 IPv6\uFF09\u4F1A\u88AB\u53D1\u9001\u7ED9 DDNS \u63D0\u4F9B\u5546")], -1)),
        Lp = {
            class: "label-item"
        },
        Mp = rt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u57DF\u540D\uFF1A")], -1)),
        Op = {
            class: "label-item_value"
        },
        Np = {
            class: "label-item"
        },
        qp = rt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u7528\u6237\u540D\uFF1A")], -1)),
        Vp = {
            class: "label-item_value"
        },
        Gp = {
            class: "label-item"
        },
        jp = rt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u5BC6\u7801\uFF1A")], -1)),
        Rp = {
            class: "label-item_value"
        },
        Up = {
            class: "actioner-container_footer"
        },
        Wp = ["disabled"],
        Hp = P({
            props: {
                name: {
                    type: String,
                    default: "ali"
                },
                onSetup: {
                    type: Function,
                    required: !0
                },
                target: {
                    type: String,
                    required: !0
                }
            },
            emits: ["update:target"],
            setup(e, {
                emit: a
            }) {
                const o = e,
                    n = y("ipv4"),
                    s = y(o.name),
                    c = y(""),
                    p = y(""),
                    f = y(""),
                    d = y(!1),
                    l = () => {
                        o.onSetup("index")
                    },
                    u = () => {
                        d.value = !0;
                        const v = F.Loading("Checking...");
                        S.Network.CheckPublickNet.POST({
                            ipVersion: n.value
                        }).then(g => {
                            var k, x;
                            if (g != null && g.data) {
                                if ((k = g == null ? void 0 : g.data) != null && k.error) {
                                    F.Warning(g == null ? void 0 : g.data.error);
                                    return
                                }
                                if ((((x = g == null ? void 0 : g.data) == null ? void 0 : x.success) || 0) == 0) {
                                    const E = g.data.result;
                                    E && E.address ? _() : m();
                                    return
                                }
                            }
                            throw "\u672A\u77E5\u9519\u8BEF"
                        }).catch(g => {
                            F.Error(g)
                        }).finally(() => {
                            v.Close(), d.value = !1
                        })
                    },
                    m = () => {
                        de({
                            title: "\u6E29\u99A8\u63D0\u793A",
                            nextTitle: "\u4F7F\u7528DDNSTO",
                            continuerTitle: "\u7EE7\u7EED\u4FDD\u5B58",
                            content: "\u68C0\u6D4B\u5230\u60A8\u7684wan\u53E3\u6CA1\u6709\u516C\u7F51IP\u6216\u8005IPv6\u5730\u5740\uFF0C\u53EF\u4EE5\u4F7F\u7528DDNSTO\u914D\u7F6E\u8FDC\u7A0B\u57DF\u540D\u8BBF\u95EE",
                            next() {
                                b()
                            },
                            continuer() {
                                _()
                            },
                            clear() {}
                        })
                    },
                    b = () => {
                        o.onSetup("ddnsto")
                    },
                    _ = () => {
                        d.value = !0;
                        const v = F.Loading("\u914D\u7F6E\u4E2D...");
                        S.Guide.PostDdns.POST({
                            ipVersion: n.value,
                            serviceName: s.value,
                            domain: c.value,
                            userName: p.value,
                            password: f.value
                        }).then(g => {
                            if (g != null && g.data) {
                                const {
                                    error: k,
                                    scope: x,
                                    success: E
                                } = g.data;
                                if (k == "-100" && x == "guide.ddns") {
                                    de({
                                        title: "\u6E29\u99A8\u63D0\u793A",
                                        content: "\u68C0\u6D4B\u5230\u4F60\u6709\u672A\u4FDD\u5B58\u7684\u914D\u7F6E\uFF0C\u53EF\u524D\u5F80\u9875\u9762\u53F3\u4E0A\u89D2\u70B9\u51FB\u67E5\u770B\uFF0C\u4FDD\u5B58\u5E76\u5E94\u7528\u6216\u8005\u6062\u590D\u914D\u7F6E\u540E\u7EE7\u7EED",
                                        next() {}
                                    });
                                    return
                                }
                                if (k) {
                                    F.Warning(k);
                                    return
                                }
                                if ((E || 0) == 0) {
                                    a("update:target", c.value), o.onSetup("ddns-success");
                                    return
                                }
                            }
                            throw "\u672A\u77E5\u9519\u8BEF"
                        }).catch(g => {
                            F.Error(g)
                        }).finally(() => {
                            v.Close(), d.value = !1
                        })
                    };
                return (v, g) => (i(), r("div", pp, [t("form", {
                    class: "actioner-dns",
                    onSubmit: nt(u, ["prevent"])
                }, [mp, t("div", {
                    class: ot(["actioner-container_body", e.name])
                }, [e.name == "ali" ? (i(), r("div", bp, hp)) : e.name == "dnspod" ? (i(), r("div", xp, Fp)) : e.name == "oray" ? (i(), r("div", Ep, Bp)) : C("", !0), t("div", Yp, [Ap, t("div", Sp, [z(t("select", {
                    name: "",
                    id: "",
                    "onUpdate:modelValue": g[0] || (g[0] = k => n.value = k)
                }, Tp, 512), [
                    [Q, n.value]
                ])]), Ip]), t("div", Lp, [Mp, t("div", Op, [z(t("input", {
                    type: "text",
                    placeholder: "myhost.example.com",
                    "onUpdate:modelValue": g[1] || (g[1] = k => c.value = k),
                    required: ""
                }, null, 512), [
                    [W, c.value, void 0, {
                        trim: !0
                    }]
                ])])]), t("div", Np, [qp, t("div", Vp, [z(t("input", {
                    type: "text",
                    "onUpdate:modelValue": g[2] || (g[2] = k => p.value = k),
                    placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
                    required: ""
                }, null, 512), [
                    [W, p.value, void 0, {
                        trim: !0
                    }]
                ])])]), t("div", Gp, [jp, t("div", Rp, [z(t("input", {
                    type: "password",
                    "onUpdate:modelValue": g[3] || (g[3] = k => f.value = k),
                    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
                    required: ""
                }, null, 512), [
                    [W, f.value, void 0, {
                        trim: !0
                    }]
                ])])])], 2), t("div", Up, [t("div", {
                    class: "close",
                    onClick: l,
                    type: "button"
                }, "\u8FD4\u56DE"), t("button", {
                    class: "next save",
                    type: "submit",
                    disabled: d.value
                }, "\u4FDD\u5B58", 8, Wp)])], 40, fp)]))
            }
        });
    var ye = Y(Hp, [
        ["__scopeId", "data-v-9435cfa6"]
    ]);
    const Zp = {
            class: "action-main"
        },
        Jp = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                },
                url: {
                    type: String,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(""),
                    n = y("index"),
                    s = d => {
                        if (d != null) {
                            if (d == "ddnsto") {
                                c();
                                return
                            }
                            n.value = d
                        } else p()
                    },
                    c = () => {
                        p(), ip({
                            url: a.url
                        })
                    },
                    p = () => {
                        a.Close && a.Close()
                    },
                    f = y("ddnsto");
                return (d, l) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => [t("div", Zp, [n.value == "index" ? (i(), M(d8, {
                        key: 0,
                        onSetup: s,
                        active: f.value,
                        "onUpdate:active": l[0] || (l[0] = u => f.value = u)
                    }, null, 8, ["active"])) : n.value == "ddns-ali" ? (i(), M(ye, {
                        key: 1,
                        onSetup: s,
                        target: o.value,
                        "onUpdate:target": l[1] || (l[1] = u => o.value = u),
                        name: "ali"
                    }, null, 8, ["target"])) : n.value == "ddns-dnspod" ? (i(), M(ye, {
                        key: 2,
                        onSetup: s,
                        target: o.value,
                        "onUpdate:target": l[2] || (l[2] = u => o.value = u),
                        name: "dnspod"
                    }, null, 8, ["target"])) : n.value == "ddns-oray" ? (i(), M(ye, {
                        key: 3,
                        onSetup: s,
                        target: o.value,
                        "onUpdate:target": l[3] || (l[3] = u => o.value = u),
                        name: "oray"
                    }, null, 8, ["target"])) : n.value == "ddns-success" ? (i(), M(h8, {
                        key: 4,
                        onSetup: s,
                        target: o.value
                    }, null, 8, ["target"])) : C("", !0)])]),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var Xp = Y(Jp, [
        ["__scopeId", "data-v-6f1d92d9"]
    ]);
    const Kp = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(Xp, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        },
        Nt = e => (O("data-v-6960b0be"), e = e(), N(), e),
        Qp = {
            class: "app-container"
        },
        t7 = {
            class: "app-container_title"
        },
        e7 = Nt(() => t("span", null, "\u8FDC\u7A0B\u57DF\u540D", -1)),
        a7 = {
            class: "app-container_domain"
        },
        o7 = {
            class: "domain-item"
        },
        n7 = Nt(() => t("div", {
            class: "domain-item_name"
        }, [t("span", null, "DDNSTO\uFF1A")], -1)),
        i7 = {
            class: "domain-item_value"
        },
        r7 = ["href", "title"],
        s7 = Nt(() => t("a", {
            class: "item_btn",
            href: "https://www.kooldns.cn/app/#/devices",
            target: "_blank"
        }, "\u63A7\u5236\u53F0", -1)),
        d7 = {
            class: "domain-item"
        },
        u7 = Nt(() => t("div", {
            class: "domain-item_name"
        }, [t("span", null, "myddns_ipv4\uFF1A")], -1)),
        l7 = {
            class: "domain-item_value"
        },
        c7 = {
            key: 0
        },
        p7 = ["href"],
        f7 = {
            key: 2,
            href: "/cgi-bin/luci/admin/services/ddns"
        },
        m7 = Nt(() => t("svg", {
            t: "1653625385794",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "4476",
            width: "28",
            height: "28"
        }, [t("path", {
            d: "M145.83060282785186 873.7309800675556h650.2280809434073c24.411293468444445 0 44.384169832296294-19.97287636385185 44.38416861866666-44.384169832296294V500.90395784533337c0-13.315251313777777-8.876834209185184-22.19208430933333-22.19208430933333-22.19208430933333s-22.19208430933333 8.876834209185184-22.19208430933333 22.19208430933333v326.22364444444446H145.83060282785186V179.1187305054815h616.9399532657777c13.315251313777777 0 22.19208430933333-8.876834209185184 22.19208552296296-22.19208552296296s-8.876834209185184-22.19208430933333-22.19208552296296-22.19208430933333H145.83060282785186c-24.411293468444445 0-44.384169832296294 19.97287636385185-44.38416861866666 44.384169832296294v650.2280797297777c0 24.411293468444445 19.97287636385185 44.384169832296294 44.38416861866666 44.384169832296294z",
            fill: "#666",
            "p-id": "4477"
        }), t("path", {
            d: "M887.0462301677038 203.53002276029633l-488.225862087111 488.2258633007407c-8.876834209185184 8.876834209185184-8.876834209185184 22.19208430933333 0 31.06891851851852 4.438417104592592 4.438417104592592 11.096042154666666 6.657625050074073 15.53445925925926 6.657625050074073s11.096042154666666-2.2192079454814815 15.53445925925926-6.657625050074073l490.4450712462222-490.4450712462222c8.876834209185184-8.876834209185184 8.876834209185184-22.19208430933333 0-31.06891851851852s-24.411293468444445-6.657625050074073-33.288127677629625 2.2192079454814815z",
            fill: "#666",
            "p-id": "4478"
        })], -1)),
        b7 = [m7],
        v7 = {
            class: "domain-item"
        },
        g7 = Nt(() => t("div", {
            class: "domain-item_name"
        }, [t("span", null, "myddns_ipv6\uFF1A")], -1)),
        _7 = {
            class: "domain-item_value"
        },
        h7 = {
            key: 0
        },
        x7 = ["href"],
        k7 = {
            key: 2,
            href: "/cgi-bin/luci/admin/services/ddns"
        },
        w7 = Nt(() => t("svg", {
            t: "1653625385794",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "4476",
            width: "28",
            height: "28"
        }, [t("path", {
            d: "M145.83060282785186 873.7309800675556h650.2280809434073c24.411293468444445 0 44.384169832296294-19.97287636385185 44.38416861866666-44.384169832296294V500.90395784533337c0-13.315251313777777-8.876834209185184-22.19208430933333-22.19208430933333-22.19208430933333s-22.19208430933333 8.876834209185184-22.19208430933333 22.19208430933333v326.22364444444446H145.83060282785186V179.1187305054815h616.9399532657777c13.315251313777777 0 22.19208430933333-8.876834209185184 22.19208552296296-22.19208552296296s-8.876834209185184-22.19208430933333-22.19208552296296-22.19208430933333H145.83060282785186c-24.411293468444445 0-44.384169832296294 19.97287636385185-44.38416861866666 44.384169832296294v650.2280797297777c0 24.411293468444445 19.97287636385185 44.384169832296294 44.38416861866666 44.384169832296294z",
            fill: "#666",
            "p-id": "4477"
        }), t("path", {
            d: "M887.0462301677038 203.53002276029633l-488.225862087111 488.2258633007407c-8.876834209185184 8.876834209185184-8.876834209185184 22.19208430933333 0 31.06891851851852 4.438417104592592 4.438417104592592 11.096042154666666 6.657625050074073 15.53445925925926 6.657625050074073s11.096042154666666-2.2192079454814815 15.53445925925926-6.657625050074073l490.4450712462222-490.4450712462222c8.876834209185184-8.876834209185184 8.876834209185184-22.19208430933333 0-31.06891851851852s-24.411293468444445-6.657625050074073-33.288127677629625 2.2192079454814815z",
            fill: "#666",
            "p-id": "4478"
        })], -1)),
        y7 = [w7],
        F7 = P({
            setup(e) {
                let a = !1,
                    o;
                const n = y({}),
                    s = function () {
                        !a || S.Guide.GetDdns.GET().then(d => {
                            var l;
                            d != null && d.data && (((l = d == null ? void 0 : d.data) == null ? void 0 : l.success) || 0) == 0 && d.data.result && (n.value = d.data.result)
                        }).then(() => {
                            !a || (o = window.setTimeout(s, 3e3))
                        })
                    };
                Ft(() => {
                    a = !0, o = window.setTimeout(s, 1100)
                }), Gt(() => {
                    o !== void 0 && window.clearTimeout(o), a = !1
                });
                const c = () => {
                        Kp({
                            url: n.value.ddnstoDomain
                        })
                    },
                    p = R(() => {
                        const d = n.value.ipv4Domain;
                        return d != null && d != "" && d != "Stopped" ? `http://${d}` : d
                    }),
                    f = R(() => {
                        const d = n.value.ipv6Domain;
                        return d != null && d != "" && d != "Stopped" ? `http://${d}` : d
                    });
                return (d, l) => {
                    var m, b, _;
                    const u = X("GlHelp");
                    return i(), r("div", Qp, [t("div", t7, [t("span", null, [e7, D(u, {
                        type: "ddns"
                    })]), t("div", {
                        class: "app-container_tool"
                    }, [t("div", {
                        class: "app-container_configure",
                        onClick: c
                    }, "Quick Config")])]), t("ul", a7, [t("li", o7, [n7, t("div", i7, [t("a", {
                        class: "configure",
                        href: (m = n.value) == null ? void 0 : m.ddnstoDomain,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: (b = n.value) == null ? void 0 : b.ddnstoDomain
                    }, h((_ = n.value) == null ? void 0 : _.ddnstoDomain), 9, r7), s7])]), t("li", d7, [u7, t("div", l7, [w(p) == "Stopped" ? (i(), r("span", c7, h(w(p)), 1)) : (i(), r("a", {
                        key: 1,
                        class: "configure",
                        href: w(p),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, h(w(p)), 9, p7)), w(p) ? (i(), r("a", f7, b7)) : C("", !0)])]), t("li", v7, [g7, t("div", _7, [w(f) == "Stopped" ? (i(), r("span", h7, h(w(f)), 1)) : (i(), r("a", {
                        key: 1,
                        class: "configure",
                        href: w(f),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, h(w(f)), 9, x7)), w(f) ? (i(), r("a", k7, y7)) : C("", !0)])])])])
                }
            }
        });
    var E7 = Y(F7, [
        ["__scopeId", "data-v-6960b0be"]
    ]);
    const C7 = {
            class: "nas-container"
        },
        $7 = {
            class: "nas-container_card"
        },
        D7 = {
            class: "nas-container_card"
        },
        B7 = {
            key: 0,
            class: "nas-container_card"
        },
        Y7 = {
            class: "nas-container_card"
        },
        A7 = {
            class: "nas-container_card"
        },
        S7 = P({
            setup(e) {
                //return (a, o) => (i(), r("div", C7, [t("div", $7, [D(e1)]), t("div", D7, [D(V2)]), w(Vt)("dockerd") ? (i(), r("div", B7, [D(c5)])) : C("", !0), t("div", Y7, [D(R4)]), t("div", A7, [D(E7)])]))
                return (a, o) => (i(), r("div", C7, [t("div", $7, [D(e1)]), w(Vt)("dockerd") ? (i(), r("div", B7, [D(c5)])) : C("", !0)]))
            }
        });
    var z7 = Y(S7, [
        ["__scopeId", "data-v-66cc4e33"]
    ]);
    const _t = e => (O("data-v-f3717996"), e = e(), N(), e),
        P7 = {
            class: "app-container"
        },
        T7 = {
            class: "app-container_title"
        },
        I7 = _t(() => t("span", null, "System", -1)),
        L7 = {
            class: "more_icon",
            title: "View system information"
        },
        M7 = {
            class: "DeviceBlock"
        },
        O7 = _t(() => t("li", null, [t("a", {
            href: "/cgi-bin/luci/admin/system/flash"
        }, "Backup / Flahs")], -1)),
        N7 = _t(() => t("li", null, [t("a", {
            href: "/cgi-bin/luci/admin/store/pages/maintance"
        }, "\u63D2\u4EF6\u5907\u4EFD")], -1)),
        q7 = {
            class: "item-label"
        },
        V7 = _t(() => t("div", {
            class: "item-label_key"
        }, [t("span", null, "CPU Heat")], -1)),
        G7 = {
            class: "item-label_value"
        },
        j7 = {
            class: "item-label"
        },
        R7 = _t(() => t("div", {
            class: "item-label_key"
        }, [t("span", null, "CPU Used")], -1)),
        U7 = {
            class: "item-label_value"
        },
        W7 = {
            class: "item-label"
        },
        H7 = _t(() => t("div", {
            class: "item-label_key"
        }, [t("span", null, "Memory Used")], -1)),
        Z7 = {
            class: "item-label_value"
        },
        J7 = {
            class: "item-label"
        },
        X7 = _t(() => t("div", {
            class: "item-label_key"
        }, [t("span", null, "Model")], -1)),
        K7 = {
            class: "item-label_value"
        },
        Q7 = {
            class: "item-label"
        },
        tf = _t(() => t("div", {
            class: "item-label_key"
        }, [t("span", null, "Firmware")], -1)),
        ef = {
            class: "item-label_value"
        },
        af = {
            class: "item-label"
        },
        of = _t(() => t("div", {
            class: "item-label_key"
        }, [t("span", null, "Kernel")], -1)),
        nf = {
            class: "item-label_value"
        },
        rf = {
            class: "item-label"
        },
        sf = _t(() => t("div", {
            class: "item-label_key"
        }, [t("span", null, "Uptime")], -1)),
        df = {
            class: "item-label_value"
        },
        uf = {
            class: "item-label"
        },
        lf = _t(() => t("div", {
            class: "item-label_key"
        }, [t("span", null, "Local Time")], -1)),
        cf = {
            class: "item-label_value"
        },
        pf = P({
            setup(e) {
                const a = Ce(),
                    o = R(() => a.version),
                    n = R(() => a.systemStatus),
                    s = y(!1),
                    c = R(() => {
                        var m;
                        return ((m = n.value) == null ? void 0 : m.cpuUsage) || 0
                    }),
                    p = R(() => {
                        var m;
                        return ((m = n.value) == null ? void 0 : m.cpuTemperature) || 0
                    }),
                    f = R(() => {
                        var b;
                        const m = ((b = n.value) == null ? void 0 : b.memAvailablePercentage) || 100;
                        return 100 - m
                    }),
                    d = yt.stampForm;
                Ft(() => {});
                const l = () => {
                        s.value = !s.value
                    },
                    u = () => {
                        l(), ct.installAndGo("app-meta-netdata", "NetData", "/cgi-bin/luci/admin/status/netdata")
                    };
                return (m, b) => {
                    var v, g, k, x, E;
                    const _ = X("progress-item");
                    return i(), r("div", P7, [t("div", T7, [I7, t("span", L7, [D($t, {
                        onClick: l
                    })]), z(t("div", M7, [t("div", {
                        class: "menu_background",
                        onClick: l
                    }), t("ul", null, [t("li", null, [t("a", {
                        onClick: u
                    }, "System monitoring")]), O7])], 512), [
                        [wt, s.value]
                    ])]), t("div", q7, [V7, t("div", G7, [D(_, {
                        value: w(p) / 1.5,
                        text: `${w(p)}\u2103`
                    }, null, 8, ["value", "text"])])]), t("div", j7, [R7, t("div", U7, [D(_, {
                        value: w(c),
                        text: `${w(c)}%`
                    }, null, 8, ["value", "text"])])]), t("div", W7, [H7, t("div", Z7, [D(_, {
                        value: w(f),
                        text: `${w(f)}%`
                    }, null, 8, ["value", "text"])])]), t("div", J7, [X7, t("div", K7, [t("span", null, h((v = w(o)) == null ? void 0 : v.model), 1)])]), t("div", Q7, [tf, t("div", ef, [t("span", null, h((g = w(o)) == null ? void 0 : g.firmwareVersion), 1)])]), t("div", af, [ of , t("div", nf, [t("span", null, h((k = w(o)) == null ? void 0 : k.kernelVersion), 1)])]), t("div", rf, [sf, t("div", df, [t("span", null, h(w(d)((x = w(n)) == null ? void 0 : x.uptime)), 1)])]), t("div", uf, [lf, t("div", cf, [t("span", null, h((E = w(n)) == null ? void 0 : E.localtime), 1)])])])
                }
            }
        });
    var ff = Y(pf, [
        ["__scopeId", "data-v-f3717996"]
    ]);
    const mf = e => te.isValid(e),
        Ct = e => {
            const a = te.IPv4.parse(e).toByteArray();
            return a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3]
        },
        He = e => te.fromByteArray([e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255]).toString(),
        bf = e => {
            if (!te.IPv4.isIPv4(e)) return !1;
            let a = 0,
                o = Ct(e);
            for (let n = 31; n >= 0 && (o & 1 << n) != 0; n--) a = a + (1 << n);
            return (~a & o) == 0
        },
        vf = (e, a, o, n) => {
            let s = Ct(e) & Ct(a),
                c = Ct(o),
                p = Ct(n),
                d = ~Ct(a);
            return c < p && c > s + 1 && p < s + d
        },
        gf = (e, a) => {
            let o = Ct(a),
                n = Ct(e) & o,
                s = ~o,
                c;
            return s >= 105 ? (c = n | s - 5, n = n | 100) : s >= 3 ? (c = n | s - 1, n = n | 2) : (n = n | 1, c = n), [He(n), He(c)]
        },
        _f = e => te.IPv4.subnetMaskFromPrefixLength(e).toString();
    var xt = {
        isValidMask: bf,
        isValidIP: mf,
        isValidMaskRange: vf,
        calcMaskRange: gf,
        prefixToMask: _f
    };
    const mt = e => (O("data-v-a0faa6f2"), e = e(), N(), e),
        hf = ["onSubmit"],
        xf = mt(() => t("div", {
            class: "actioner-dns_header"
        }, [t("span", null, "Intranet Configuration")], -1)),
        kf = {
            class: "actioner-dns_body"
        },
        wf = {
            class: "label-item"
        },
        yf = mt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "IPv4 Address")], -1)),
        Ff = {
            class: "label-item_value"
        },
        Ef = {
            class: "label-item"
        },
        Cf = mt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "IPv4 Subnet mask")], -1)),
        $f = {
            class: "label-item_value"
        },
        Df = {
            key: 0,
            class: "chose_dhcp"
        },
        Bf = {
            key: 0,
            class: "dhcp_info"
        },
        Yf = {
            key: 1,
            class: "dhcp_info"
        },
        Af = {
            class: "label-item"
        },
        Sf = mt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "IP Pool start address")], -1)),
        zf = {
            class: "label-item_value"
        },
        Pf = {
            class: "label-item"
        },
        Tf = mt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "IP Pool end address")], -1)),
        If = {
            class: "label-item_value"
        },
        Lf = {
            class: "actioner-dns_footer"
        },
        Mf = ["disabled"],
        Of = {
            key: 1,
            class: "actioner-dns"
        },
        Nf = mt(() => t("div", {
            class: "actioner-dns_header"
        }, [t("span", null, "Change configuration")], -1)),
        qf = {
            class: "actioner-dns_body"
        },
        Vf = {
            key: 0,
            class: "setting_status"
        },
        Gf = mt(() => t("div", {
            class: "success_icon"
        }, [t("svg", {
            t: "1642063181211",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "5062",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063"
        })])], -1)),
        jf = mt(() => t("div", {
            class: "config-message"
        }, "Configuration successfully", -1)),
        Rf = ["href"],
        Uf = {
            key: 1,
            class: "setting_status"
        },
        Wf = mt(() => t("div", {
            class: "success_icon"
        }, [t("svg", {
            t: "1642063200324",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "5898",
            width: "128",
            height: "128"
        }, [t("path", {
            d: "M549.044706 512l166.189176-166.249412a26.383059 26.383059 0 0 0 0-36.98447 26.383059 26.383059 0 0 0-37.044706 0L512 475.015529l-166.249412-166.249411a26.383059 26.383059 0 0 0-36.98447 0 26.383059 26.383059 0 0 0 0 37.044706L475.015529 512l-166.249411 166.249412a26.383059 26.383059 0 0 0 0 36.98447 26.383059 26.383059 0 0 0 37.044706 0L512 548.984471l166.249412 166.249411a26.383059 26.383059 0 0 0 36.98447 0 26.383059 26.383059 0 0 0 0-37.044706L548.984471 512zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z",
            fill: "#E84335",
            "p-id": "5899"
        })])], -1)),
        Hf = mt(() => t("div", {
            class: "config-message"
        }, "Configuration failed", -1)),
        Zf = mt(() => t("p", null, "Please try to reconfigure", -1)),
        Jf = {
            key: 2,
            class: "setting_status"
        },
        Xf = mt(() => t("div", {
            class: "success_icon"
        }, [t("svg", {
            width: "128px",
            height: "128px",
            viewBox: "0 0 128 128",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, [t("g", {
            id: "icon_yellow",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, [t("g", {
            id: "Icon/Warning"
        }, [t("rect", {
            id: "rectangle",
            fill: "#000000",
            "fill-rule": "nonzero",
            opacity: "0",
            x: "0",
            y: "0",
            width: "128",
            height: "128"
        }), t("path", {
            d: "M64,8 C33.075,8 8,33.075 8,64 C8,94.925 33.075,120 64,120 C94.925,120 120,94.925 120,64 C120,33.075 94.925,8 64,8 Z M60,37 C60,36.45 60.45,36 61,36 L67,36 C67.55,36 68,36.45 68,37 L68,71 C68,71.55 67.55,72 67,72 L61,72 C60.45,72 60,71.55 60,71 L60,37 Z M64,92 C60.6875,92 58,89.3125 58,86 C58,82.6875 60.6875,80 64,80 C67.3125,80 70,82.6875 70,86 C70,89.3125 67.3125,92 64,92 Z",
            id: "shape",
            fill: "#FAAD14"
        })])])])], -1)),
        Kf = mt(() => t("div", {
            class: "config-message"
        }, "Configuration timeout", -1)),
        Qf = mt(() => t("p", null, "Router IP may have been modified successfully. If refreshing the page fails, please reconnect router, otherwise, please try to reconfigure.", -1)),
        tm = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(0),
                    n = y({
                        lanIp: "",
                        netMask: "255.255.255.0",
                        enableDhcp: !1,
                        dhcpStart: "",
                        dhcpEnd: ""
                    });
                y("");
                const s = y(!1);
                y(!0), y(!1);
                const c = y(""),
                    p = y(2),
                    f = y(!1),
                    d = y("timeout");
                let l = !0;
                (() => {
                    S.Guide.GetLan.GET().then(g => {
                        g.data.result && (f.value = g.data.result.enableDhcp || !1, g.data.result.enableDhcp = !1, n.value = g.data.result, g.data.result.lanIp !== location.hostname && (l = !1))
                    })
                })();
                const m = () => {
                        const g = n.value;
                        if (!xt.isValidIP(g.lanIp)) {
                            F.Warning("IPv4 Address format ERROR!!");
                            return
                        }
                        if (!xt.isValidMask(g.netMask)) {
                            F.Warning("IPv4 Subnet mask format ERROR!!");
                            return
                        }
                        const k = xt.calcMaskRange(g.lanIp, g.netMask);
                        g.dhcpStart = k[0], g.dhcpEnd = k[1], n.value = g
                    },
                    b = () => {
                        const g = n.value;
                        if (!xt.isValidIP(g.lanIp)) {
                            F.Warning("IPv4 Address format ERROR!!");
                            return
                        }
                        if (!xt.isValidMask(g.netMask)) {
                            F.Warning("IPv4 Subnet mask format ERROR!!");
                            return
                        }
                        if (g.enableDhcp && !xt.isValidIP(g.dhcpStart) || !xt.isValidIP(g.dhcpEnd) || !xt.isValidMaskRange(g.lanIp, g.netMask, g.dhcpStart, g.dhcpEnd)) {
                            F.Warning("Format of DHCP IP Pool is wrong or exceeds range of the subnet");
                            return
                        }
                        const k = F.Loading("Configuring...", 30);
                        let x = 0;
                        const E = B => {
                                d.value = B, o.value = 1, x = 1, k.Close()
                            },
                            A = () => {
                                const B = new Date().getTime() + 3e4,
                                    $ = l ? location.protocol + "//" + g.lanIp + (location.port ? ":" + location.port : "") : location.origin,
                                    q = $ + "/luci-static/resources/icons/loading.gif",
                                    H = () => {
                                        x == 0 && (new Date().getTime() > B ? E("timeout") : window.setTimeout(Z, 2e3))
                                    },
                                    G = () => {
                                        x == 0 && (c.value = $ + location.pathname, E("success"), window.setTimeout(() => {
                                            p.value = 1
                                        }, 1e3), window.setTimeout(() => {
                                            location.href = c.value
                                        }, 2e3))
                                    },
                                    Z = () => {
                                        if (x != 0) return;
                                        console.log("check online ", q);
                                        const ht = new Image;
                                        ht.onload = G, ht.onerror = H, ht.src = q
                                    };
                                window.setTimeout(Z, 5e3)
                            };
                        S.Guide.LanIp.POST(g).then(B => {
                            var $;
                            if (B != null && B.data) {
                                if ((B.data.success || 0) == 0) return;
                                if (($ = B.data) != null && $.error) throw B.data.error
                            }
                            throw "Unknown mistake"
                        }).catch(B => {
                            x == 0 && (E("fail"), F.Error(B))
                        }), A(), window.setTimeout(() => {
                            x == 0 && E("timeout")
                        }, 3e4)
                    },
                    _ = g => {
                        g.preventDefault(), a.Close && a.Close()
                    },
                    v = g => {
                        location.reload()
                    };
                return (g, k) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => [o.value == 0 ? (i(), r("form", {
                        key: 0,
                        class: "actioner-dns",
                        onSubmit: nt(b, ["prevent"])
                    }, [xf, t("div", kf, [t("div", wf, [yf, t("div", Ff, [z(t("input", {
                        type: "text",
                        placeholder: "192.168.100.1",
                        "onUpdate:modelValue": k[0] || (k[0] = x => n.value.lanIp = x),
                        onChange: m
                    }, null, 544), [
                        [W, n.value.lanIp, void 0, {
                            trim: !0
                        }]
                    ])])]), t("div", Ef, [Cf, t("div", $f, [z(t("input", {
                        type: "text",
                        placeholder: "255.255.255.0",
                        "onUpdate:modelValue": k[1] || (k[1] = x => n.value.netMask = x),
                        onChange: m
                    }, null, 544), [
                        [W, n.value.netMask, void 0, {
                            trim: !0
                        }]
                    ])])]), f.value ? (i(), r("div", Df, [D(ea, {
                        modelValue: n.value.enableDhcp,
                        "onUpdate:modelValue": k[2] || (k[2] = x => n.value.enableDhcp = x)
                    }, {
                        default: V(() => [n.value.enableDhcp ? (i(), r("span", Bf, "Edit DHCP service")) : (i(), r("span", Yf, "Keep DHCP service settings"))]),
                        _: 1
                    }, 8, ["modelValue"])])) : C("", !0), n.value.enableDhcp ? (i(), r(L, {
                        key: 1
                    }, [t("div", Af, [Sf, t("div", zf, [z(t("input", {
                        type: "text",
                        placeholder: "192.168.1.2",
                        "onUpdate:modelValue": k[3] || (k[3] = x => n.value.dhcpStart = x)
                    }, null, 512), [
                        [W, n.value.dhcpStart, void 0, {
                            trim: !0
                        }]
                    ])])]), t("div", Pf, [Tf, t("div", If, [z(t("input", {
                        type: "text",
                        placeholder: "192.168.1.254",
                        "onUpdate:modelValue": k[4] || (k[4] = x => n.value.dhcpEnd = x)
                    }, null, 512), [
                        [W, n.value.dhcpEnd, void 0, {
                            trim: !0
                        }]
                    ])])])], 64)) : C("", !0)]), t("div", Lf, [t("button", {
                        class: "cbi-button cbi-button-apply app-btn",
                        disabled: s.value
                    }, "Save & Apply", 8, Mf), t("button", {
                        class: "cbi-button cbi-button-remove app-btn app-back",
                        onClick: _
                    }, "Cancel")])], 40, hf)) : o.value == 1 ? (i(), r("div", Of, [Nf, t("div", qf, [d.value == "success" ? (i(), r("div", Vf, [Gf, jf, t("a", {
                        href: c.value,
                        class: "NewAdress"
                    }, "Jump to new address after " + h(p.value), 9, Rf)])) : d.value == "fail" ? (i(), r("div", Uf, [Wf, Hf, Zf, t("button", {
                        class: "cbi-button cbi-button-apply app-btn",
                        onClick: v
                    }, "I see")])) : d.value == "timeout" ? (i(), r("div", Jf, [Xf, Kf, Qf, t("button", {
                        class: "cbi-button cbi-button-apply app-btn",
                        onClick: v
                    }, "Refresh page")])) : C("", !0)])])) : C("", !0)]),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var em = Y(tm, [
        ["__scopeId", "data-v-a0faa6f2"]
    ]);
    const am = () => {
            const e = document.createElement("div");
            document.body.appendChild(e);
            const a = tt(em, {
                Close: () => {
                    o()
                }
            });
            a.mount(e);
            const o = () => {
                a.unmount(), e.remove()
            };
            return {
                Close: o
            }
        },
        bt = e => (O("data-v-0384f3ac"), e = e(), N(), e),
        om = {
            key: 0,
            class: "actioner-dns"
        },
        nm = bt(() => t("div", {
            class: "actioner-dns_header"
        }, [t("span", null, "\u6C99\u7BB1\u6A21\u5F0F\u914D\u7F6E\u5411\u5BFC")], -1)),
        im = {
            class: "actioner-dns_body"
        },
        rm = bt(() => t("p", {
            class: "sandbox_info"
        }, "\u4E00\u4E2A\u7B80\u6613\u6C99\u7BB1\uFF0C\u65B9\u4FBF\u7528\u6765\u5B9E\u9A8C\u7CFB\u7EDF\u914D\u7F6E\u548C\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u5F00\u53D1\u672A\u5B8C\u6210\u7684\u8F6F\u4EF6\uFF0C\u4F46\u4E0D\u4FDD\u62A4Docker\u548C\u786C\u76D8\u7684\u6570\u636E", -1)),
        sm = {
            key: 0,
            class: "disk_loading_icon"
        },
        dm = bt(() => t("span", {
            class: "disk_loading_info"
        }, "\u6B63\u5728\u52A0\u8F7D\u4E2D...", -1)),
        um = {
            key: 1,
            class: "disk_tips"
        },
        lm = bt(() => t("span", null, "\u68C0\u6D4B\u4E0D\u5230\u6302\u8F7D\u7684\u78C1\u76D8\u4FE1\u606F\uFF0C\u8BF7\u5148\u63D2\u4E0A\u78C1\u76D8\uFF0C\u5EFA\u8BAE\u4F7F\u7528U\u76D8\u6216\u8005\u79FB\u52A8\u786C\u76D8\uFF0C\u65B9\u4FBF\u88C5\u5378", -1)),
        cm = {
            class: "label-item"
        },
        pm = bt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u76EE\u6807\u78C1\u76D8\uFF08\u5EFA\u8BAE\u9009\u62E9U\u76D8\u6216\u8005\u79FB\u52A8\u786C\u76D8\uFF0C\u65B9\u4FBF\u88C5\u5378\uFF09")], -1)),
        fm = {
            class: "label-item_value"
        },
        mm = bt(() => t("option", {
            value: ""
        }, "\u8BF7\u9009\u62E9\u76EE\u6807\u78C1\u76D8", -1)),
        bm = ["value"],
        vm = {
            class: "label-item"
        },
        gm = bt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u76EE\u6807\u5206\u533A\uFF08\u5206\u533A\u5927\u5C0F\u987B\u5927\u4E8E2G\uFF0C\u5C06\u6B64\u5206\u533A\u4F5C\u4E3A\u5916\u90E8 overlay \u4F7F\u7528\uFF09")], -1)),
        _m = {
            class: "label-item_value"
        },
        hm = bt(() => t("option", {
            selected: "true",
            value: ""
        }, "\u8BF7\u9009\u62E9\u76EE\u6807\u5206\u533A", -1)),
        xm = ["value", "disabled"],
        km = {
            class: "sandbox_tips"
        },
        wm = bt(() => t("span", null, "\u6B64\u64CD\u4F5C\u4F1A\u5C06\u4F1A\u5220\u9664\u8BE5\u5206\u533A\u5168\u90E8\u6570\u636E", -1)),
        ym = {
            class: "sandbox_info timeout"
        },
        Fm = U("\u5373\u5C06\u91CD\u542F\u8BBE\u5907 "),
        Em = bt(() => t("p", {
            class: "sandbox_roboot_tips"
        }, [U("\u7B49\u5F85\u8BBE\u5907\u91CD\u542F\uFF0C\u91CD\u542F\u5B8C\u6210\u540E"), t("span", {
            class: "sandbox_roboot_refresh"
        }, "\u8BF7\u5237\u65B0\u754C\u9762")], -1)),
        Cm = {
            key: 0,
            class: "actioner-dns_footer"
        },
        $m = ["disabled"],
        Dm = {
            key: 1,
            class: "actioner-tips"
        },
        Bm = bt(() => t("div", {
            class: "actioner-tips_header"
        }, [t("span", null, "\u6E29\u99A8\u63D0\u793A")], -1)),
        Ym = bt(() => t("div", {
            class: "actioner-tips_body"
        }, [t("p", {
            class: "sandbox_info"
        }, "\u6B64\u64CD\u4F5C\u4F1A\u5C06\u4F1A\u5220\u9664\u8BE5\u5206\u533A\u5168\u90E8\u6570\u636E\uFF0C\u5E76\u683C\u5F0F\u5316\u6210EXT4\uFF0C\u968F\u540E\u81EA\u52A8\u91CD\u542F\u8FDB\u5165\u6C99\u7BB1\u6A21\u5F0F\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F")], -1)),
        Am = {
            key: 2,
            class: "actioner-tips"
        },
        Sm = bt(() => t("div", {
            class: "actioner-tips_header"
        }, [t("span", null, "\u9519\u8BEF")], -1)),
        zm = {
            class: "actioner-tips_body"
        },
        Pm = {
            class: "sandbox_info"
        },
        Tm = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(0);
                y("disk");
                const n = y(""),
                    s = y(3),
                    c = y(""),
                    p = y([]),
                    f = y(""),
                    d = y(null);
                (() => {
                    S.Nas.SandboxDisks.GET().then(x => {
                        var E;
                        if (x != null && x.data && (E = x.data) != null && E.result) {
                            d.value = x.data.result;
                            return
                        }
                        throw "\u52A0\u8F7D\u78C1\u76D8\u4FE1\u606F\u5931\u8D25"
                    }).catch(x => {
                        n.value = x, o.value = 3
                    })
                })();
                const u = () => S.System.Reboot.POST({
                        name: c.value,
                        path: f.value
                    }).then(x => {
                        var E;
                        if (!(x != null && x.data && (((E = x == null ? void 0 : x.data) == null ? void 0 : E.success) || 0) == 0)) throw "\u672A\u77E5\u9519\u8BEF"
                    }),
                    m = x => {
                        var E, A;
                        f.value = "", p.value = c.value && ((A = (E = d.value) == null ? void 0 : E.disks.find(B => B.path == c.value)) == null ? void 0 : A.childrens) || []
                    },
                    b = () => {
                        s.value > 0 && (s.value -= 1, window.setTimeout(b, 1e3))
                    },
                    _ = x => {
                        x.preventDefault(), a.Close && a.Close()
                    },
                    v = () => {
                        new Promise((x, E) => {
                            const A = "/luci-static/resources/icons/loading.gif",
                                B = () => {
                                    window.setTimeout($, 2e3)
                                },
                                $ = () => {
                                    const q = new Image;
                                    q.onload = x, q.onerror = B, q.src = A
                                };
                            window.setTimeout($, 1e4)
                        }).then(() => {
                            window.setTimeout(() => {
                                location.reload()
                            }, 2e3)
                        })
                    },
                    g = x => {
                        const E = F.Loading("\u914D\u7F6E\u6C99\u7BB1\u91CD\u542F\u4E2D...");
                        S.Nas.Sandbox.POST({
                            path: f.value
                        }).then(A => {
                            var B;
                            if (A != null && A.data) {
                                if ((A.data.success || 0) == 0) return o.value = 2, window.setTimeout(b, 1e3), u();
                                if ((B = A.data) != null && B.error) throw A.data.error
                            }
                            throw "\u672A\u77E5\u9519\u8BEF"
                        }).then(v).catch(A => F.Warning(A)).finally(() => E.Close())
                    },
                    k = () => {
                        o.value = 0
                    };
                return (x, E) => {
                    const A = X("icon-loading");
                    return i(), M(et, {
                        Close: e.Close,
                        type: 1
                    }, {
                        default: V(() => [o.value == 0 || o.value == 2 ? (i(), r("div", om, [nm, t("div", im, [rm, o.value == 0 ? (i(), r(L, {
                            key: 0
                        }, [d.value ? C("", !0) : (i(), r("div", sm, [D(A, {
                            size: 38,
                            color: "currentColor"
                        }), dm])), d.value && d.value.disks.length == 0 ? (i(), r("div", um, [D(gt), lm])) : C("", !0), d.value && d.value.disks.length > 0 ? (i(), r(L, {
                            key: 2
                        }, [t("div", cm, [pm, t("div", fm, [z(t("select", {
                            name: "",
                            id: "",
                            onChange: m,
                            "onUpdate:modelValue": E[0] || (E[0] = B => c.value = B)
                        }, [mm, (i(!0), r(L, null, j(d.value.disks, (B, $) => (i(), r("option", {
                            value: B.path,
                            key: $
                        }, h(B.venderModel) + "\uFF08" + h(B.size) + "\uFF09 ", 9, bm))), 128))], 544), [
                            [Q, c.value]
                        ])])]), t("div", vm, [gm, t("div", _m, [z(t("select", {
                            name: "",
                            id: "",
                            "onUpdate:modelValue": E[1] || (E[1] = B => f.value = B)
                        }, [hm, (i(!0), r(L, null, j(p.value, (B, $) => (i(), r("option", {
                            value: B.path,
                            key: $,
                            disabled: B.sizeInt < (1 << 30) * 1 || B.isSystemRoot
                        }, h(B.name) + "\uFF08" + h(B.filesystem || "\u672A\u683C\u5F0F\u5316") + "\uFF09" + h(B.total), 9, xm))), 128))], 512), [
                            [Q, f.value]
                        ])])]), t("div", km, [D(gt), wm])], 64)) : C("", !0)], 64)) : C("", !0), o.value == 2 ? (i(), r(L, {
                            key: 1
                        }, [t("p", ym, [Fm, t("span", null, "\uFF08" + h(s.value) + "s\uFF09", 1)]), Em], 64)) : C("", !0)]), o.value == 0 ? (i(), r("div", Cm, [t("button", {
                            class: "cbi-button cbi-button-apply app-btn",
                            disabled: !f.value,
                            onClick: E[2] || (E[2] = B => o.value = 1)
                        }, "\u5F00\u542F\u6C99\u7BB1", 8, $m), t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: _
                        }, "\u53D6\u6D88")])) : C("", !0)])) : C("", !0), o.value == 1 ? (i(), r("div", Dm, [Bm, Ym, t("div", {
                            class: "actioner-tips_footer"
                        }, [t("button", {
                            class: "cbi-button cbi-button-apply app-btn",
                            onClick: g
                        }, "\u7EE7\u7EED"), t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: k
                        }, "\u53D6\u6D88")])])) : C("", !0), o.value == 3 ? (i(), r("div", Am, [Sm, t("div", zm, [t("p", Pm, h(n.value), 1)]), t("div", {
                            class: "actioner-tips_footer"
                        }, [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: k
                        }, "\u53D6\u6D88")])])) : C("", !0)]),
                        _: 1
                    }, 8, ["Close"])
                }
            }
        });
    var Im = Y(Tm, [
        ["__scopeId", "data-v-0384f3ac"]
    ]);
    const Lm = () => {
            const e = document.createElement("div");
            document.body.appendChild(e);
            const a = tt(Im, {
                Close: () => {
                    o()
                }
            });
            a.mount(e);
            const o = () => {
                a.unmount(), e.remove()
            };
            return {
                Close: o
            }
        },
        ba = e => (O("data-v-4db2efb4"), e = e(), N(), e),
        Mm = {
            key: 0,
            class: "actioner-dns"
        },
        Om = ba(() => t("div", {
            class: "actioner-dns_header"
        }, [t("span", null, "\u6C99\u7BB1\u6A21\u5F0F\u914D\u7F6E\u5411\u5BFC")], -1)),
        Nm = ba(() => t("div", {
            class: "actioner-dns_body"
        }, [t("p", {
            class: "sandbox_info"
        }, "\u4E00\u4E2A\u7B80\u6613\u6C99\u7BB1\uFF0C\u65B9\u4FBF\u7528\u6765\u5B9E\u9A8C\u7CFB\u7EDF\u914D\u7F6E\u548C\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u5F00\u53D1\u672A\u5B8C\u6210\u7684\u8F6F\u4EF6\uFF0C\u4F46\u4E0D\u4FDD\u62A4 Docker \u548C\u786C\u76D8\u7684\u6570\u636E"), t("div", {
            class: "sandbox_environment"
        }, [t("p", null, "\u5F53\u524D\u5904\u4E8E\u6C99\u7BB1\u73AF\u5883\uFF1A"), t("p", null, "1\u3001\u70B9\u51FB\u201C\u63D0\u4EA4\u201D\u53EF\u5C06\u53D8\u66F4\u5408\u5E76\u5230\u975E\u6C99\u7BB1\u73AF\u5883"), t("p", null, "2\u3001\u70B9\u51FB\u201C\u91CD\u7F6E\u201D\u53EF\u5C06\u6C99\u7BB1\u6062\u590D\u5230\u521D\u59CB\u72B6\u6001"), t("p", null, "3\u3001\u70B9\u51FB\u201C\u9000\u51FA\u201D\u53EF\u9000\u51FA\u6C99\u7BB1\u73AF\u5883\uFF0C\u5E76\u653E\u5F03\u6C99\u7BB1\u4E2D\u7684\u6570\u636E")]), t("div", {
            class: "sandbox_environment_info"
        }, [U("\u4EE5\u4E0A\u64CD\u4F5C\u90FD\u5C06\u91CD\u542F\u8BBE\u5907\uFF0C\u8BBE\u5907\u91CD\u542F\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u5237\u65B0\u9875\u9762\u3002\u5982\u679C IP \u53D8\u5316\u53EF\u80FD\u9700\u8981"), t("span", {
            class: "sandbox_environment_reboot"
        }, "\u624B\u52A8\u5728\u5730\u5740\u680F\u8F93\u5165\u5730\u5740"), t("p", {
            class: "sandbox_environment_tex"
        }, [U(" \u5982\u9700"), t("b", null, "\u4E34\u65F6"), U("\u9000\u51FA\u6C99\u7BB1\u73AF\u5883\uFF0C\u8BF7\u5C06\u8BBE\u5907\u5173\u673A\u540E\u62D4\u51FA\u76F8\u5173\u78C1\u76D8\uFF0C\u542F\u52A8\u524D\u63D2\u5165\u76F8\u5173\u78C1\u76D8\u53EF\u518D\u6B21\u8FDB\u5165\u6C99\u7BB1\u3002"), t("br"), U(" \u6CE8\u610F\u4E34\u65F6\u9000\u51FA\u6C99\u7BB1\u73AF\u5883\u4EE5\u540E\u5347\u7EA7\u56FA\u4EF6\u4F1A\u5BFC\u81F4\u4E4B\u524D\u7684\u6C99\u7BB1\u6570\u636E\u65E0\u6548 ")])])], -1)),
        qm = {
            class: "actioner-dns_footer"
        },
        Vm = ["disabled"],
        Gm = ["disabled"],
        jm = ["disabled"],
        Rm = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(0),
                    n = y(!1),
                    s = () => {
                        new Promise((l, u) => {
                            const m = "/luci-static/resources/icons/loading.gif",
                                b = () => {
                                    window.setTimeout(_, 2e3)
                                },
                                _ = () => {
                                    const v = new Image;
                                    v.onload = l, v.onerror = b, v.src = m
                                };
                            window.setTimeout(_, 1e4)
                        }).then(() => {
                            window.setTimeout(() => {
                                location.reload()
                            }, 2e3)
                        })
                    },
                    c = () => {
                        n.value = !0;
                        const l = F.Loading("\u63D0\u4EA4\u4E2D...");
                        S.Nas.SandboxCommit.POST().then(u => {
                            var m, b;
                            if (u != null && u.data)
                                if ((((m = u == null ? void 0 : u.data) == null ? void 0 : m.success) || 0) == 0) {
                                    F.Loading("\u8BBE\u5907\u91CD\u542F\u4E2D...");
                                    return
                                } else(b = u == null ? void 0 : u.data) != null && b.error && alert(u.data.error);
                            throw "\u672A\u77E5\u9519\u8BEF"
                        }).then(s).catch(u => {
                            F.Error(u), n.value = !1
                        }).finally(() => l.Close())
                    },
                    p = () => {
                        n.value = !0;
                        const l = F.Loading("\u91CD\u7F6E\u4E2D...");
                        S.Nas.SandboxReset.POST().then(u => {
                            var m, b;
                            if (u != null && u.data)
                                if ((((m = u == null ? void 0 : u.data) == null ? void 0 : m.success) || 0) == 0) {
                                    F.Loading("\u8BBE\u5907\u91CD\u542F\u4E2D... \u82E5\u9875\u9762\u957F\u65F6\u95F4\u672A\u5237\u65B0\u53EF\u80FD\u9700\u8981\u624B\u52A8\u586B\u5199\u5730\u5740");
                                    return
                                } else(b = u == null ? void 0 : u.data) != null && b.error && alert(u.data.error);
                            throw "\u672A\u77E5\u9519\u8BEF"
                        }).then(s).catch(u => {
                            F.Error(u), n.value = !1
                        }).finally(() => l.Close())
                    },
                    f = () => {
                        if (!confirm("\u786E\u5B9A\u653E\u5F03\u6C99\u7BB1\u4E2D\u7684\u6570\u636E\uFF1F\u518D\u6B21\u8FDB\u5165\u6C99\u7BB1\u9700\u8981\u91CD\u65B0\u683C\u5F0F\u5316\u76F8\u5E94\u78C1\u76D8\u5206\u533A")) return;
                        n.value = !0;
                        const l = F.Loading("\u6267\u884C\u4E2D...");
                        S.Nas.SandboxExit.POST().then(u => {
                            var m, b;
                            if (u != null && u.data)
                                if ((((m = u == null ? void 0 : u.data) == null ? void 0 : m.success) || 0) == 0) {
                                    F.Loading("\u8BBE\u5907\u91CD\u542F\u4E2D... \u82E5\u9875\u9762\u957F\u65F6\u95F4\u672A\u5237\u65B0\u53EF\u80FD\u9700\u8981\u624B\u52A8\u586B\u5199\u5730\u5740");
                                    return
                                } else(b = u == null ? void 0 : u.data) != null && b.error && alert(u.data.error);
                            throw "\u672A\u77E5\u9519\u8BEF"
                        }).then(s).catch(u => {
                            F.Error(u), n.value = !1
                        }).finally(() => l.Close())
                    },
                    d = l => {
                        l.preventDefault(), a.Close && a.Close()
                    };
                return (l, u) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => [o.value == 0 ? (i(), r("div", Mm, [Om, Nm, t("div", qm, [t("button", {
                        class: "cbi-button cbi-button-apply app-btn",
                        onClick: c,
                        disabled: n.value
                    }, "\u63D0\u4EA4", 8, Vm), t("button", {
                        class: "cbi-button cbi-button-apply app-btn",
                        onClick: p,
                        disabled: n.value
                    }, "\u91CD\u7F6E", 8, Gm), t("button", {
                        class: "cbi-button cbi-button-apply app-btn",
                        onClick: f,
                        disabled: n.value
                    }, "\u9000\u51FA", 8, jm), t("button", {
                        class: "cbi-button cbi-button-remove app-btn app-back",
                        onClick: d
                    }, "\u53D6\u6D88")])])) : C("", !0)]),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var Um = Y(Rm, [
        ["__scopeId", "data-v-4db2efb4"]
    ]);
    const Wm = () => {
            const e = document.createElement("div");
            document.body.appendChild(e);
            const a = tt(Um, {
                Close: () => {
                    o()
                }
            });
            a.mount(e);
            const o = () => {
                a.unmount(), e.remove()
            };
            return {
                Close: o
            }
        },
        Hm = {
            class: "nav-container"
        },
        Zm = ["onClick"],
        Jm = {
            key: 1,
            class: "btn_styles color3 app-update-button",
            onclick: "window.location.href='/cgi-bin/luci/admin/system/ota'"
        },
        Xm = U(" \u56FA\u4EF6\u66F4\u65B0 "),
        Km = {
            key: 0,
            style: {
                display: "inline-block"
            }
        },
        Qm = {
            key: 1
        },
        t9 = ["disabled"],
        e9 = U(" DNS Server "),
        a9 = {
            key: 0,
            style: {
                display: "inline-block"
            }
        },
        o9 = P({
            setup(e) {
                const a = Ce(),
                    o = le(),
                    n = R(() => o.status);
                y(!1), y(!0);
                const s = y(),
                    c = () => {
                        oa()
                    },
                    p = () => {
                        Lm()
                    },
                    f = () => {
                        Wm()
                    },
                    d = () => {
                        alert("\u8BE5\u56FA\u4EF6\u4E0D\u652F\u6301\u6C99\u7BB1\u6A21\u5F0F")
                    },
                    l = () => {
                        am()
                    },
                    u = () => {
                        ra()
                    },
                    m = () => {
                        var b, _, v, g;
                        window.open(`${(_=(b=window.quickstart_configs)==null?void 0:b.ttyd)!=null&&_.ssl?"https":"http"}://${window.location.hostname}:${((g=(v=window.quickstart_configs)==null?void 0:v.ttyd)==null?void 0:g.port)||7681}/`, "_blank")
                    };
                return Vt("sandbox") && S.Nas.GetSandbox.GET().then(_ => {
                    var v, g, k;
                    _ != null && _.data && ((((v = _ == null ? void 0 : _.data) == null ? void 0 : v.success) || 0) == 0 ? (g = _ == null ? void 0 : _.data) != null && g.result && (s.value = _.data.result) : (k = _ == null ? void 0 : _.data) != null && k.error && alert(_.data.error))
                }).catch(_ => F.Warning(_)), (b, _) => {
                    var k, x, E, A, B, $;
                    const v = X("router-link"),
                        g = X("icon-loading");
                        return i(), r("div", Hm, [D(v, {
                            to: "/network",
                            custom: ""
                        }, {
                            default: V(({
                                navigate: q
                            }) => [t("button", {
                                class: "btn_styles color2",
                                onClick: q
                            }, "Network Config", 8, Zm)]),
                            _: 1
                        }), //w(Vt)("ttyd") ? (i(), r("button", {
                            //key: 0,
                            //class: "btn_styles color2 app-btn-ttyd",
                            //onClick: m
                        //}, "Terminal")) : C("", !0), w(Vt)("ota") ? (i(), r("button", Jm, [Xm, w(a).checkUpdate == null ? (i(), r("span", Km, [D(g, {
                        w(Vt)("ota") ? (i(), r("button", Jm, [Xm, w(a).checkUpdate == null ? (i(), r("span", Km, [D(g, {
                            size: "0.8em",
                            color: "currentColor"
                        })])) : (k = w(a).checkUpdate) != null && k.needUpdate ? (i(), r("i", Qm)) : C("", !0)])) : C("", !0), t("button", {
                            class: "btn_styles color4",
                            onClick: l
                        }, "Intranet"), t("button", {
                            class: "btn_styles color5",
                            onClick: c,
                            disabled: !((x = w(n)) != null && x.proto)
                        }, [e9, (E = w(n)) != null && E.proto ? C("", !0) : (i(), r("span", a9, [D(g, {
                            size: "0.8em",
                            color: "currentColor"
                        })]))], 8, t9) //t("button", {
                            //class: "btn_styles color1",
                            //onClick: u
                        //}, "Software Source")
                            //w(Vt)("sandbox") ? (i(), r(L, {
                            //key: 2
                        //}, [((A = s.value) == null ? void 0 : A.status) == "unsupport" ? (i(), r("button", {
                            //key: 0,
                            //class: "btn_styles color2",
                            //onClick: d
                        //}, "\u5F00\u542F\u6C99\u7BB1")) : ((B = s.value) == null ? void 0 : B.status) == "stopped" ? (i(), r("button", {
                            //key: 1,
                            //class: "btn_styles color3",
                            //onClick: p
                        //}, "\u5F00\u542F\u6C99\u7BB1")) : (($ = s.value) == null ? void 0 : $.status) == "running" ? (i(), r("button", {
                            //key: 2,
                            //class: "btn_styles color4",
                            //onClick: f
                        //}, "\u6C99\u7BB1\u5DF2\u5F00\u542F")) : C("", !0)], 64)) : C("", !0)
                    ])
                    }
                }
            });
    var n9 = Y(o9, [
        ["__scopeId", "data-v-0d223b54"]
    ]);
    const _e = e => (O("data-v-08ce2a3e"), e = e(), N(), e),
        i9 = {
            id: "page"
        },
        r9 = _e(() => t("div", {
            style: {
                height: "48px",
                "text-align": "right"
            }
        }, [t("a", {
            onclick: "void(0)",
            href: "https://www.istoreos.com/",
            target: "_blank",
            style: {
                "text-decoration": "none",
                color: "white",
                "line-height": "1.5em"
            }
        }, "iStoreOS\u5B98\u7F51")], -1)),
        s9 = _e(() => t("em", null, null, -1)),
        d9 = _e(() => t("em", null, null, -1)),
        u9 = _e(() => t("em", null, null, -1)),
        l9 = P({
            setup(e) {
                return Qa(), (a, o) => (i(), r("div", i9, [r9, D(e0), s9, D(n9), D(z7), d9, D(ff), u9]))
            }
        });
    var c9 = Y(l9, [
        ["__scopeId", "data-v-08ce2a3e"]
    ]);
    const p9 = {};

    function f9(e, a) {
        const o = X("router-view");
        return i(), M(o)
    }
    var m9 = Y(p9, [
        ["render", f9]
    ]);
    const b9 = {},
        v9 = {
            width: "136px",
            height: "136px",
            viewBox: "0 0 136 136",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        g9 = Mt('<title>icon_router</title><defs><rect id="path-1" x="0" y="0" width="72" height="72" rx="10"></rect><filter x="-68.1%" y="-65.3%" width="236.1%" height="236.1%" filterUnits="objectBoundingBox" id="filter-2"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.00576685472   0 0 0 0 0.712891067   0 0 0 0 0.523400265  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="icon_router" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group" transform="translate(32.000000, 30.000000)"><g id="Rectangle"><use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use><use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use></g><g id="luyouqi" transform="translate(9.000000, 12.000000)" fill="#2FBE96" fill-rule="nonzero"><path d="M5,36.25 L6.24999997,36.25 L6.24999997,37.5 C6.24999997,38.8750001 7.37499997,40 8.74999999,40 L13.75,40 C15.125,40 16.25,38.875 16.25,37.5 L16.25,36.25 L38.75,36.25 L38.75,37.5 C38.75,38.8750001 39.875,40 41.25,40 L46.25,40 C47.625,40 48.75,38.875 48.75,37.5 L48.75,36.25 L50,36.25 C52.75,36.25 55,34 55,31.25 L0,31.25 C0,34 2.25,36.25 5,36.25 Z M50,20 L45,20 L45,1.875 C45,0.874999981 44.1250001,0 43.125,0 C42.125,0 41.25,0.874999981 41.25,1.875 L41.25,20 L13.75,20 L13.75,1.875 C13.75,0.874999981 12.875,0 11.875,0 C10.8749999,0 10,0.874999981 10,1.875 L10,20 L5,20 C2.25,20 0,22.25 0,25 L0,28.75 L55,28.75 L55,25 C55,22.25 52.75,20 50,20 Z M30.625,26.25 C29.625,26.25 28.75,25.375 28.75,24.375 C28.75,23.375 29.625,22.5 30.625,22.5 C31.625,22.5 32.5,23.375 32.5,24.375 C32.5,25.375 31.625,26.25 30.625,26.25 Z M36.875,26.25 C35.875,26.25 35,25.375 35,24.375 C35,23.375 35.875,22.5 36.875,22.5 C37.875,22.5 38.75,23.375 38.75,24.375 C38.75,25.375 37.875,26.25 36.875,26.25 Z M43.125,26.25 C42.125,26.25 41.25,25.375 41.25,24.375 C41.25,23.375 42.125,22.5 43.125,22.5 C44.1250001,22.5 45,23.375 45,24.375 C45,25.375 44.1250001,26.25 43.125,26.25 Z" id="Shape"></path></g></g></g>', 3),
        _9 = [g9];

    function h9(e, a) {
        return i(), r("svg", v9, _9)
    }
    var x9 = Y(b9, [
        ["render", h9]
    ]);
    const k9 = {},
        w9 = {
            width: "136px",
            height: "136px",
            viewBox: "0 0 136 136",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        y9 = Mt('<title>icon_dial</title><defs><rect id="path-1" x="0" y="0" width="72" height="72" rx="10"></rect><filter x="-68.1%" y="-65.3%" width="236.1%" height="236.1%" filterUnits="objectBoundingBox" id="filter-2"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.788163337   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="icon_dial" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group" transform="translate(32.000000, 30.000000)"><g id="Rectangle"><use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use><use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use></g><g id="bohao" transform="translate(14.000000, 13.000000)" fill="#FF6C68" fill-rule="nonzero"><path d="M27.2980992,0.874200971 C26.7268663,0.758523804 26.1331134,0.866913453 25.6392917,1.17701641 C25.1554389,1.47930436 24.8141653,1.96483113 24.6930984,2.52315663 C24.5731079,3.07574301 24.6878398,3.65344238 25.0098158,4.11789644 C25.3371296,4.5939296 25.8390162,4.92096156 26.4060118,5.02766508 C31.045922,5.95330175 35.0418401,8.55830791 37.6547588,12.3772204 C40.2676774,16.1961329 41.1782401,20.7555549 40.2228092,25.2210907 C40.1022213,25.7732483 40.2170154,26.350782 40.5395266,26.8145082 C40.9402684,27.3951092 41.5930751,27.7496771 42.2973083,27.7692363 C42.7546094,27.787238 43.2065645,27.6654879 43.5932104,27.420139 C44.0774855,27.1189844 44.4196894,26.6344423 44.542043,26.0766435 C47.0071602,14.5551113 39.2726569,3.24779794 27.2980992,0.874200971 M31.0947493,32.74255 C31.2267149,32.824535 34.1299578,34.6215925 36.3733729,36.8312195 C37.2153133,37.6669372 38.6247059,39.0646486 38.5877555,40.6871575 C38.5560837,41.7952768 37.906813,42.9047185 36.5990341,44.0789548 C36.2743987,44.3844149 33.3645574,46.9999998 28.710131,46.9999998 C27.3912247,46.9937384 26.0799397,46.7991615 24.8158264,46.422138 C23.3601676,45.9861014 21.9649286,45.3685851 20.6628693,44.584088 C15.2153297,41.4871721 11.0188239,37.5109013 7.02422548,31.6621998 C0.162014763,21.6230086 -0.0293353467,13.0238438 0.00233638896,11.4039796 C0.0142132841,3.92483507 6.48844518,0.983955044 7.22613283,0.671883236 C8.2422679,0.218321248 9.12907663,6.56389309e-05 9.94594365,6.56389309e-05 C10.3221663,-0.00210452636 10.6967773,0.0495481459 11.0584136,0.153526698 C11.7736671,0.362456139 12.7647287,0.901970084 13.4337942,2.28910278 C14.3430371,4.17343462 15.2021331,6.8736491 15.7880603,9.69419635 C16.4056593,12.6271423 14.6953853,13.450959 13.0418564,14.2470065 L12.9771933,14.2734533 C12.9771933,14.2734533 10.0515161,15.4476896 9.53685034,15.6513296 C9.03619964,15.8421642 8.77356796,16.3935308 8.94036587,16.9035838 C10.1201383,20.341663 11.9227882,23.9119759 14.1477281,27.2178213 C16.2898673,30.4151399 18.819615,33.3337939 21.6790044,35.9069051 C21.8774142,36.0783671 22.130935,36.1722806 22.3929382,36.1713728 L22.4826748,36.1713728 C22.7712253,36.1486937 23.0383058,36.009873 23.2230017,35.7865724 C23.7910711,35.0765111 24.4084443,34.4075091 25.07052,33.7845524 C26.4350442,32.5349429 27.6702421,31.933279 28.8434163,31.9332791 C29.1639159,31.9320794 29.4829541,31.9766039 29.7909292,32.0655129 C30.2528699,32.2365199 30.6924376,32.4629666 31.1000279,32.7399053 M21.8400024,18.2655921 C21.2727998,18.1576666 20.7707788,17.8303809 20.4424867,17.3545011 C20.1195351,16.8899676 20.0042929,16.3116272 20.1244497,15.758439 C20.3633736,14.7240741 21.3099013,14.0116196 22.3678647,14.0698132 C22.4897786,14.07308 22.61119,14.0867942 22.7307701,14.1108057 C27.8483957,15.1263614 31.1554534,19.9595073 30.1010483,24.8852168 C29.9793303,25.4425668 29.6381304,25.9270351 29.1548551,26.2287124 C28.767264,26.4717676 28.3158939,26.5928996 27.8589529,26.5764873 C27.7379231,26.5712459 27.6174771,26.5566569 27.4986869,26.5328501 C26.9296524,26.4268815 26.4259713,26.0986569 26.098532,25.6204368 C25.77801,25.1583614 25.6633089,24.5836905 25.7818146,24.033631 C26.0564522,22.762289 25.7906175,21.4337675 25.0480859,20.3667874 C24.2959909,19.2710084 23.1434575,18.5161347 21.8400024,18.2655921 M24.130925,11.620843 C22.9432347,11.3828221 22.1738753,10.2628017 22.4153724,9.11633459 C22.5346624,8.55724948 22.875754,8.07082659 23.360246,7.76887199 C23.8543437,7.45823035 24.448547,7.34937141 25.0203731,7.46473423 C29.1614533,8.28722853 32.7258439,10.6145437 35.0589956,14.0235314 C37.3755259,17.3601994 38.204796,21.5111457 37.3485986,25.484236 C37.2282609,26.0425595 36.8861326,26.5276693 36.4010857,26.8277315 C35.9088475,27.1418728 35.3138166,27.2514444 34.7422782,27.1331916 C33.5545879,26.8951707 32.7852285,25.7751504 33.0267255,24.6286832 C33.6442543,21.7595069 33.0443871,18.7622168 31.3705573,16.3534912 C29.6708669,13.8824331 27.0678646,12.1820541 24.1256464,11.620843 L24.130925,11.620843 Z" id="Shape"></path></g></g></g>', 3),
        F9 = [y9];

    function E9(e, a) {
        return i(), r("svg", w9, F9)
    }
    var C9 = Y(k9, [
        ["render", E9]
    ]);
    const $9 = {},
        D9 = {
            width: "136px",
            height: "136px",
            viewBox: "0 0 136 136",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        },
        B9 = Mt('<title>icon_side router</title><defs><rect id="path-1" x="0" y="0" width="72" height="72" rx="10"></rect><filter x="-68.1%" y="-65.3%" width="236.1%" height="236.1%" filterUnits="objectBoundingBox" id="filter-2"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.064613567   0 0 0 0 0.378874402   0 0 0 0 0.840799967  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="icon_side-router" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-5" transform="translate(32.000000, 30.000000)"><g id="Rectangle"><use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use><use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use></g><g id="route" transform="translate(15.000000, 15.000000)" fill="#3B89FE"><path d="M37.25,31 L37.25,18.66 L22.2525,18.66 L22.2525,11 L26,11 L26,1 L16,1 L16,11 L19.75,11 L19.75,18.6625 L4.75,18.6625 L4.75,31 L1,31 L1,41 L11,41 L11,31 L7.25,31 L7.25,21.16 L19.75,21.16 L19.75,31 L16,31 L16,41 L26,41 L26,31 L22.2525,31 L22.2525,21.16 L34.75,21.16 L34.75,31 L31,31 L31,41 L41,41 L41,31 L37.25,31 Z M23.1425,38.1425 L18.8575,38.1425 L18.8575,33.855 L23.1425,33.855 L23.1425,38.1425 Z M8.1425,38.14 L3.8575,38.14 L3.8575,33.855 L8.1425,33.855 L8.1425,38.14 Z M23.1425,8.1425 L18.8575,8.1425 L18.8575,3.8575 L23.1425,3.8575 L23.1425,8.1425 Z M38.285,38.1425 L34,38.1425 L34,33.855 L38.285,33.855 L38.285,38.1425 Z" id="Shape" fill-rule="nonzero"></path><rect id="Rectangle" x="15" y="0" width="12" height="12" rx="2"></rect><rect id="Rectangle" x="0" y="30" width="12" height="12" rx="2"></rect><rect id="Rectangle" x="15" y="30" width="12" height="12" rx="2"></rect><rect id="Rectangle" x="30" y="30" width="12" height="12" rx="2"></rect></g></g></g>', 3),
        Y9 = [B9];

    function A9(e, a) {
        return i(), r("svg", D9, Y9)
    }
    var S9 = Y($9, [
        ["render", A9]
    ]);
    const Wt = e => (O("data-v-082ffcaf"), e = e(), N(), e),
        z9 = {
            id: "page"
        },
        P9 = Wt(() => t("div", {
            class: "title"
        }, "Welcome to Network Configuration Wizard", -1)),
        T9 = Wt(() => t("div", {
            class: "desc"
        }, "Choose a connection method to get started", -1)),
        I9 = {
            class: "network-containers"
        },
        L9 = {
            class: "network-container_item"
        },
        M9 = {
            class: "cover"
        },
        O9 = {
            class: "thumbnail"
        },
        N9 = Wt(() => t("span", null, "Broadband dial-up", -1)),
        q9 = {
            class: "network-container_item"
        },
        V9 = {
            class: "cover"
        },
        G9 = {
            class: "thumbnail"
        },
        j9 = Wt(() => t("span", null, "Router", -1)),
        R9 = {
            class: "network-container_item"
        },
        U9 = {
            class: "cover"
        },
        W9 = {
            class: "thumbnail"
        },
        H9 = Wt(() => t("span", null, "Bypass Router", -1)),
        Z9 = Wt(() => t("div", {
            class: "info"
        }, [U("Didn't find the desired configuration? Please use "), t("a", {
            href: "/cgi-bin/luci/admin/network/network"
        }, "Advanced Mode")], -1)),
        J9 = P({
            setup(e) {
                return (a, o) => {
                    const n = X("router-link");
                    return i(), r("div", z9, [P9, T9, t("div", I9, [t("div", L9, [D(n, {
                        to: "/network/pppoe"
                    }, {
                        default: V(() => [t("div", M9, [t("div", O9, [D(C9), N9])])]),
                        _: 1
                    })]), t("div", q9, [D(n, {
                        to: "/network/dhcp"
                    }, {
                        default: V(() => [t("div", V9, [t("div", G9, [D(x9), j9])])]),
                        _: 1
                    })]), t("div", R9, [D(n, {
                        to: "/network/gateway"
                    }, {
                        default: V(() => [t("div", U9, [t("div", W9, [D(S9), H9])])]),
                        _: 1
                    })])]), Z9])
                }
            }
        });
    var X9 = Y(J9, [
        ["__scopeId", "data-v-082ffcaf"]
    ]);
    const St = e => (O("data-v-16746f19"), e = e(), N(), e),
        K9 = {
            key: 0,
            id: "page"
        },
        Q9 = St(() => t("h2", {
            class: "title"
        }, "Configure Broadband Account", -1)),
        tb = St(() => t("h3", {
            class: "desc"
        }, "Please make sure you have connected the routing WAN port to the optical modem", -1)),
        eb = {
            class: "network-message"
        },
        ab = {
            key: 0
        },
        ob = U(" because your device"),
        nb = St(() => t("span", null, "no WAN port", -1)),
        ib = U(", unable to go through this setup wizard, please see for details "),
        rb = St(() => t("a", {
            href: "https://doc.linkease.com/zh/guide/istoreos/question.html#%E7%BD%91%E7%BB%9C",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "Link", -1)),
        sb = [ob, nb, ib, rb],
        db = ["onSubmit"],
        ub = St(() => t("div", {
            class: "label-key"
        }, [t("span", null, "Broadband account")], -1)),
        lb = ["disabled"],
        cb = St(() => t("div", {
            class: "label-key"
        }, [t("span", null, "Password")], -1)),
        pb = ["disabled"],
        fb = {
            key: 0,
            class: "chose_dhcp"
        },
        mb = St(() => t("span", {
            class: "dhcp_info"
        }, "Enable LAN port DHCP service ( Used to restore the default state from the bypass mode )", -1)),
        bb = {
            key: 1,
            class: "msg"
        },
        vb = {
            class: "btns"
        },
        gb = ["disabled"],
        _b = ["onClick"],
        hb = {
            key: 1,
            id: "page"
        },
        xb = St(() => t("h2", {
            class: "title"
        }, "Configuration successfully", -1)),
        kb = {
            class: "btns"
        },
        wb = ["onClick"],
        yb = ["onClick"],
        Fb = P({
            setup(e) {
                const a = y(0),
                    o = y({}),
                    n = y(""),
                    s = y(!1),
                    c = y(0),
                    p = y(!1);
                (() => T(this, null, function* () {
                    var l, u;
                    s.value = !0;
                    try {
                        const m = yield Promise.all([S.Guide.Pppoe.GET(), S.Guide.GetLan.GET()]);
                        if (m[0].data) {
                            const {
                                success: b,
                                error: _,
                                result: v
                            } = m[0].data;
                            v && (v.enableLanDhcp = !1, o.value = v), b == -1011 && (s.value = !0, c.value = b)
                        }(l = m[1].data) != null && l.result && (((u = m[1].data) == null ? void 0 : u.result).enableDhcp || (p.value = !0, o.value.enableLanDhcp = !0))
                    } catch (m) {
                        n.value = m
                    }
                    c.value == 0 && (s.value = !1)
                }))();
                const d = () => T(this, null, function* () {
                    const l = o.value.account || "",
                        u = o.value.password || "";
                    if (l == "") {
                        n.value = "Account cannot be empty";
                        return
                    }
                    if (u == "") {
                        n.value = "Password cannot be empty";
                        return
                    }
                    s.value = !0;
                    const m = F.Loading("Configuration...");
                    try {
                        const b = yield S.Guide.Pppoe.POST({
                            account: l,
                            password: u
                        });
                        if (b != null && b.data) {
                            const {
                                error: _,
                                success: v
                            } = b.data;
                            _ && (n.value = _), (v == null || v == 0) && (F.Success("Configuration successfully"), a.value = 1)
                        }
                    } catch (b) {
                        n.value = b
                    }
                    s.value = !1, m.Close()
                });
                return (l, u) => {
                    const m = X("switch-box"),
                        b = X("router-link");
                    return a.value == 0 ? (i(), r("div", K9, [Q9, tb, t("div", eb, [c.value == -1011 ? (i(), r("li", ab, sb)) : C("", !0)]), t("form", {
                        onSubmit: nt(d, ["prevent"])
                    }, [t("label", null, [ub, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": u[0] || (u[0] = _ => o.value.account = _),
                        placeholder: "Broadband account",
                        required: "",
                        disabled: s.value
                    }, null, 8, lb), [
                        [W, o.value.account, void 0, {
                            trim: !0
                        }]
                    ])]), t("label", null, [cb, z(t("input", {
                        type: "password",
                        "onUpdate:modelValue": u[1] || (u[1] = _ => o.value.password = _),
                        placeholder: "Broadband password",
                        required: "",
                        disabled: s.value
                    }, null, 8, pb), [
                        [W, o.value.password, void 0, {
                            trim: !0
                        }]
                    ])]), p.value ? (i(), r("div", fb, [D(m, {
                        modelValue: o.value.enableLanDhcp,
                        "onUpdate:modelValue": u[2] || (u[2] = _ => o.value.enableLanDhcp = _)
                    }, {
                        default: V(() => [mb]),
                        _: 1
                    }, 8, ["modelValue"])])) : C("", !0), n.value ? (i(), r("div", bb, h(n.value), 1)) : C("", !0), t("div", vb, [t("button", {
                        class: "cbi-button cbi-button-apply app-btn app-next",
                        disabled: s.value
                    }, "Save & Apply", 8, gb), D(b, {
                        to: "/network",
                        custom: ""
                    }, {
                        default: V(({
                            navigate: _
                        }) => [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: _
                        }, "Cancel", 8, _b)]),
                        _: 1
                    })])], 40, db)])) : a.value == 1 ? (i(), r("div", hb, [xb, t("div", kb, [D(b, {
                        to: "/",
                        custom: ""
                    }, {
                        default: V(({
                            navigate: _
                        }) => [t("button", {
                            class: "cbi-button cbi-button-apply app-btn app-next",
                            onClick: _
                        }, "Dashboard", 8, wb)]),
                        _: 1
                    }), D(b, {
                        to: "/network",
                        custom: ""
                    }, {
                        default: V(({
                            navigate: _
                        }) => [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: _
                        }, "Web Wizard", 8, yb)]),
                        _: 1
                    })])])) : C("", !0)
                }
            }
        });
    var Eb = Y(Fb, [
        ["__scopeId", "data-v-16746f19"]
    ]);
    const st = e => (O("data-v-0d3a64fa"), e = e(), N(), e),
        Cb = {
            key: 0,
            id: "page"
        },
        $b = st(() => t("h2", {
            class: "title"
        }, "Configure Router", -1)),
        Db = st(() => t("h3", {
            class: "desc"
        }, "Please make sure you have connected the routed WAN port to the superior routed local area network (LAN) port", -1)),
        Bb = {
            class: "network-message"
        },
        Yb = {
            key: 0
        },
        Ab = U(" because your device"),
        Sb = st(() => t("span", null, "No WAN port", -1)),
        zb = U(", this setup wizard cannot be used, for details, please see "),
        Pb = st(() => t("a", {
            href: "https://doc.linkease.com/zh/guide/istoreos/question.html#%E7%BD%91%E7%BB%9C",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "Link", -1)),
        Tb = [Ab, Sb, zb, Pb],
        Ib = ["onSubmit"],
        Lb = st(() => t("div", {
            class: "label-key"
        }, [t("span", null, "WAN Interface configuration method")], -1)),
        Mb = st(() => t("option", {
            value: "dhcp"
        }, "DHCP Client", -1)),
        Ob = st(() => t("option", {
            value: "static"
        }, "IP Address Static", -1)),
        Nb = [Mb, Ob],
        qb = st(() => t("div", {
            class: "label-key"
        }, [t("span", null, "IP address")], -1)),
        Vb = ["disabled"],
        Gb = {
            key: 0,
            class: "msg"
        },
        jb = st(() => t("div", {
            class: "label-key"
        }, [t("span", null, "Subnet mask")], -1)),
        Rb = ["disabled"],
        Ub = {
            key: 1,
            class: "msg"
        },
        Wb = st(() => t("div", {
            class: "label-key"
        }, [t("span", null, "Gateway address")], -1)),
        Hb = ["disabled"],
        Zb = st(() => t("div", {
            class: "label-key"
        }, [t("span", null, "DNS Configuration method")], -1)),
        Jb = ["disabled"],
        Xb = st(() => t("option", {
            value: "manual"
        }, "Manual configuration", -1)),
        Kb = st(() => t("div", {
            class: "label-key"
        }, [t("span", null, "DNS server")], -1)),
        Qb = ["onUpdate:modelValue", "disabled"],
        tv = st(() => t("div", {
            class: "label-key"
        }, [t("span", null, "DNS server")], -1)),
        ev = ["disabled"],
        av = st(() => t("div", {
            class: "label-key"
        }, "Alternate DNS server", -1)),
        ov = ["disabled"],
        nv = {
            key: 2,
            class: "chose_dhcp"
        },
        iv = st(() => t("span", {
            class: "dhcp_info"
        }, "Enable LAN port DHCP service ( Used to restore the default state from the bypass mode )", -1)),
        rv = {
            key: 3,
            class: "msgs"
        },
        sv = {
            class: "btns"
        },
        dv = ["disabled"],
        uv = ["onClick"],
        lv = {
            key: 1,
            id: "page"
        },
        cv = st(() => t("h2", {
            class: "title"
        }, "Configuration successfully", -1)),
        pv = {
            class: "btns"
        },
        fv = ["onClick"],
        mv = ["onClick"],
        bv = P({
            setup(e) {
                const a = y(0),
                    o = y({}),
                    n = y(""),
                    s = y(""),
                    c = y(""),
                    p = y(!1),
                    f = y(""),
                    d = y(""),
                    l = y(0),
                    u = yt.checkIsIP,
                    m = y(!1);
                (() => T(this, null, function* () {
                    var x, E;
                    p.value = !0;
                    try {
                        const A = yield Promise.all([S.Guide.ClientModel.GET(), S.Guide.GetLan.GET()]);
                        if (A[0]) {
                            const B = A[0];
                            if (B.data) {
                                const {
                                    success: $,
                                    error: q,
                                    result: H
                                } = B.data;
                                H && (H.wanProto != "dhcp" && H.wanProto != "static" && (H.wanProto = "dhcp", H.dnsProto = "auto"), H.enableLanDhcp = !1, o.value = H), $ == -1011 && (l.value = $, p.value = !0)
                            }
                        }(x = A[1].data) != null && x.result && (((E = A[1].data) == null ? void 0 : E.result).enableDhcp || (m.value = !0, o.value.enableLanDhcp = !0))
                    } catch (A) {
                        n.value = A
                    }
                    l.value == 0 && (p.value = !1)
                }))();
                const _ = x => {
                        x.target.value == "static" ? ((o.value.staticIp == null || o.value.staticIp == "") && (o.value.staticIp = "192.168.1.100"), (o.value.subnetMask == null || o.value.subnetMask == "") && (o.value.subnetMask = "255.255.255.0"), o.value.dnsProto == "auto" && setTimeout(() => o.value.dnsProto = "manual", 0)) : o.value.dnsProto == "manual" && setTimeout(() => o.value.dnsProto = "auto", 0)
                    },
                    v = x => {
                        const E = x.target;
                        if (E.value == "") {
                            f.value = "";
                            return
                        }
                        u(E.value) ? f.value = "" : f.value = "Please enter a legal ip address"
                    },
                    g = x => {
                        const E = x.target;
                        if (E.value == "") {
                            d.value = "";
                            return
                        }
                        u(E.value) ? d.value = "" : d.value = "Please enter a legal address"
                    },
                    k = () => T(this, null, function* () {
                        const x = {};
                        switch (o.value.wanProto) {
                            case "dhcp":
                                break;
                            case "static":
                                x.staticIp = o.value.staticIp, x.subnetMask = o.value.subnetMask, x.gateway = o.value.gateway;
                                break
                        }
                        switch (o.value.dnsProto) {
                            case "auto":
                                break;
                            case "manual":
                                x.manualDnsIp = [], o.value.manualDnsIp != null && o.value.manualDnsIp.length > 0 ? x.manualDnsIp = o.value.manualDnsIp : (x.manualDnsIp.push(s.value), c.value && x.manualDnsIp.push(c.value));
                                break
                        }
                        x.dnsProto = o.value.dnsProto, x.wanProto = o.value.wanProto, x.enableLanDhcp = o.value.enableLanDhcp;
                        const E = F.Loading("Configuration....");
                        p.value = !0;
                        try {
                            const A = yield S.Guide.ClientModel.POST(x);
                            if (A != null && A.data) {
                                const {
                                    success: B,
                                    error: $
                                } = A == null ? void 0 : A.data;
                                $ && (n.value = $), (B == null || B == 0) && (F.Success("Configuration successfully"), a.value = 1)
                            }
                        } catch (A) {
                            n.value = A
                        }
                        p.value = !1, E.Close()
                    });
                return (x, E) => {
                    const A = X("switch-box"),
                        B = X("router-link");
                    return a.value == 0 ? (i(), r("div", Cb, [$b, Db, t("div", Bb, [l.value == -1011 ? (i(), r("li", Yb, Tb)) : C("", !0)]), t("form", {
                        onSubmit: nt(k, ["prevent"])
                    }, [t("label", null, [Lb, z(t("select", {
                        "onUpdate:modelValue": E[0] || (E[0] = $ => o.value.wanProto = $),
                        onInput: _
                    }, Nb, 544), [
                        [Q, o.value.wanProto]
                    ])]), o.value.wanProto == "static" ? (i(), r(L, {
                        key: 0
                    }, [t("label", null, [qb, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": E[1] || (E[1] = $ => o.value.staticIp = $),
                        placeholder: "IP address",
                        required: "",
                        disabled: p.value,
                        onInput: v
                    }, null, 40, Vb), [
                        [W, o.value.staticIp, void 0, {
                            trim: !0
                        }]
                    ])]), f.value ? (i(), r("p", Gb, h(f.value), 1)) : C("", !0), t("label", null, [jb, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": E[2] || (E[2] = $ => o.value.subnetMask = $),
                        placeholder: "Subnet mask",
                        required: "",
                        disabled: p.value,
                        onInput: g
                    }, null, 40, Rb), [
                        [W, o.value.subnetMask, void 0, {
                            trim: !0
                        }]
                    ])]), d.value ? (i(), r("p", Ub, h(d.value), 1)) : C("", !0), t("label", null, [Wb, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": E[3] || (E[3] = $ => o.value.gateway = $),
                        placeholder: "Gateway address",
                        required: "",
                        disabled: p.value
                    }, null, 8, Hb), [
                        [W, o.value.gateway, void 0, {
                            trim: !0
                        }]
                    ])])], 64)) : C("", !0), t("label", null, [Zb, z(t("select", {
                        "onUpdate:modelValue": E[4] || (E[4] = $ => o.value.dnsProto = $)
                    }, [t("option", {
                        value: "auto",
                        disabled: o.value.wanProto == "static"
                    }, "Get automatically (DHCP)", 8, Jb), Xb], 512), [
                        [Q, o.value.dnsProto]
                    ])]), o.value.dnsProto == "manual" ? (i(), r(L, {
                        key: 1
                    }, [o.value.manualDnsIp != null && o.value.manualDnsIp.length > 0 ? (i(!0), r(L, {
                        key: 0
                    }, j(o.value.manualDnsIp, ($, q) => (i(), r("label", null, [Kb, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": H => o.value.manualDnsIp[q] = H,
                        placeholder: "DNS server",
                        required: "",
                        disabled: p.value
                    }, null, 8, Qb), [
                        [W, o.value.manualDnsIp[q], void 0, {
                            trim: !0
                        }]
                    ])]))), 256)) : (i(), r(L, {
                        key: 1
                    }, [t("label", null, [tv, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": E[5] || (E[5] = $ => s.value = $),
                        placeholder: "DNS server",
                        required: "",
                        disabled: p.value
                    }, null, 8, ev), [
                        [W, s.value, void 0, {
                            trim: !0
                        }]
                    ])]), t("label", null, [av, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": E[6] || (E[6] = $ => c.value = $),
                        placeholder: "Alternate DNS server",
                        disabled: p.value
                    }, null, 8, ov), [
                        [W, c.value, void 0, {
                            trim: !0
                        }]
                    ])])], 64))], 64)) : C("", !0), m.value ? (i(), r("div", nv, [D(A, {
                        modelValue: o.value.enableLanDhcp,
                        "onUpdate:modelValue": E[7] || (E[7] = $ => o.value.enableLanDhcp = $)
                    }, {
                        default: V(() => [iv]),
                        _: 1
                    }, 8, ["modelValue"])])) : C("", !0), n.value ? (i(), r("div", rv, h(n.value), 1)) : C("", !0), t("div", sv, [t("button", {
                        class: "cbi-button cbi-button-apply app-btn app-next",
                        disabled: p.value
                    }, "Save & Apply", 8, dv), D(B, {
                        to: "/network",
                        custom: ""
                    }, {
                        default: V(({
                            navigate: $
                        }) => [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: $
                        }, "Cancel", 8, uv)]),
                        _: 1
                    })])], 40, Ib)])) : a.value == 1 ? (i(), r("div", lv, [cv, t("div", pv, [D(B, {
                        to: "/",
                        custom: ""
                    }, {
                        default: V(({
                            navigate: $
                        }) => [t("button", {
                            class: "cbi-button cbi-button-apply app-btn app-next",
                            onClick: $
                        }, "Dashboard", 8, fv)]),
                        _: 1
                    }), D(B, {
                        to: "/network",
                        custom: ""
                    }, {
                        default: V(({
                            navigate: $
                        }) => [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: $
                        }, "Web Wizard", 8, mv)]),
                        _: 1
                    })])])) : C("", !0)
                }
            }
        });
    var vv = Y(bv, [
        ["__scopeId", "data-v-0d3a64fa"]
    ]);
    const lt = e => (O("data-v-1c3f186c"), e = e(), N(), e),
        gv = {
            key: 0,
            id: "page"
        },
        _v = lt(() => t("h2", {
            class: "title"
        }, "Bypass Router Configuration", -1)),
        hv = lt(() => t("code", null, [U("Bypass routing mode is also called single-arm routing mode. You can use the upper level route (main route) to dial, and then use this route to realize some advanced functions. Wizard supports automatic or manual configuration."), t("br"), t("br"), U("For manual configuration, you need to get yourself an ip address (example 192.168.1.1) and subnet mask from main router.")], -1)),
        xv = {
            class: "btns"
        },
        kv = ["onClick"],
        wv = {
            key: 1,
            id: "page"
        },
        yv = lt(() => t("h2", {
            class: "title"
        }, "Configure bypass network", -1)),
        Fv = lt(() => t("h3", {
            class: "desc"
        }, "Now, please configure the bypass route information", -1)),
        Ev = ["onSubmit"],
        Cv = lt(() => t("div", {
            class: "label-key"
        }, [t("span", null, "LAN Interface configuration mode")], -1)),
        $v = {
            class: "label-value"
        },
        Dv = lt(() => t("option", null, "Bypass router mode only supports IP address static", -1)),
        Bv = [Dv],
        Yv = lt(() => t("div", {
            class: "label-key"
        }, [t("span", null, "IP address")], -1)),
        Av = lt(() => t("div", {
            class: "label-key"
        }, [t("span", null, "Subnet mask")], -1)),
        Sv = lt(() => t("div", {
            class: "label-key"
        }, [t("span", null, "Gateway address")], -1)),
        zv = lt(() => t("div", {
            class: "label-key"
        }, [t("span", null, "DNS server")], -1)),
        Pv = {
            key: 0,
            class: "msgs"
        },
        Tv = {
            class: "switch_inline",
            style: {
                "margin-bottom" : "5%"
            }
        },
        Iv = {
            key: 0,
            class: "switch_info"
        },
        Lv = {
            key: 1,
            class: "switch_info"
        },
        Mv = {
            class: "switch_inline"
        },
        Ov = lt(() => t("span", {
            class: "switch_info"
        }, "Automatically obtain IPv6", -1)),
        Nv = {
            class: "btns"
        },
        qv = lt(() => t("button", {
            class: "cbi-button cbi-button-apply app-btn app-next"
        }, "Save & Apply", -1)),
        Vv = ["onClick"],
        Gv = {
            key: 2,
            id: "page"
        },
        jv = lt(() => t("h2", {
            class: "title"
        }, "Configuration successfully", -1)),
        Rv = lt(() => t("h3", {
            class: "desc"
        }, "Now, disconnect WAN port of this router, connect one of LAN ports to the main router, and connect the current browser device to the main router. Click '' browser will jump to new routing ip", -1)),
        Uv = {
            key: 3,
            id: "page"
        },
        Wv = lt(() => t("h2", {
            class: "title"
        }, "Bypass Router Auto-Configuration", -1)),
        Hv = lt(() => t("code", null, [U("Confirm main router has opened DHCP service, and confirm WAN port of route in DHCP client mode."), t("br"), U("(if not, you can use \u0022Router\u0022 wizard for change it to DHCP client)"), t("br"), t("br"), U("Connect WAN port of route to main router. Routed LAN connections to get configuration automatically.")], -1)),
        Zv = U("After meeting all conditions, click \u0022Current IPv4 Upstream information\u0022 to refresh the current connection information. Once successfully, \u0022Auto fill\u0022 button will be activated. If you fail, you can click again"),
        Jv = ["disabled"],
        Xv = U("Current IPv4 Upstream information"),
        Kv = {
            style: {
                "text-align": "left"
            }
        },
        Qv = U("Click \u0022Auto Fill\u0022, it will switch to parameter page and fill in automatically. You can still adjust the parameters yourself."),
        tg = {
            class: "btns"
        },
        eg = ["disabled"],
        ag = ["onClick"],
        og = P({
            setup(e) {
                const a = y(0),
                    o = y(""),
                    n = y(!1),
                    s = R(() => {
                        var m, b, _;
                        return !(((m = p.value) == null ? void 0 : m.ipv4addr) && ((b = p.value) == null ? void 0 : b.ipv4mask) && ((_ = p.value) == null ? void 0 : _.gateway))
                    }),
                    c = y({
                        subnetMask: "255.255.255.0",
                        staticDnsIp: "",
                        staticLanIp: "",
                        gateway: "",
                        enableDhcp: !0,
                        dhcp6c: !1
                    }),
                    p = y(),
                    f = () => {
                        n.value = !0, S.Network.Status.GET().then(m => {
                            if (m != null && m.data) {
                                const {
                                    result: b
                                } = m == null ? void 0 : m.data;
                                b && (p.value = b)
                            }
                        }).finally(() => {
                            n.value = !1
                        })
                    },
                    d = m => {
                        var b, _, v, g, k;
                        m && (c.value.staticLanIp = ((b = p.value) == null ? void 0 : b.ipv4addr) || "", c.value.subnetMask = ((_ = p.value) == null ? void 0 : _.ipv4mask) && xt.prefixToMask(p.value.ipv4mask) || "", c.value.gateway = ((v = p.value) == null ? void 0 : v.gateway) || "", c.value.staticDnsIp = ((g = p.value) == null ? void 0 : g.dnsList) && ((k = p.value) == null ? void 0 : k.dnsList[0]) || "8.8.8.8"), a.value = 1
                    },
                    l = m => {
                        window.location.href = location.protocol + "//" + c.value.staticLanIp + (location.port ? ":" + location.port : "")
                    },
                    u = () => T(this, null, function* () {
                        const m = c.value,
                            b = F.Loading("Configuration...");
                        try {
                            const _ = yield S.Guide.GatewayRouter.POST(m);
                            if (_ != null && _.data) {
                                const {
                                    success: v,
                                    error: g
                                } = _ == null ? void 0 : _.data;
                                if (g && (o.value = g), v == null || v == 0) {
                                    setTimeout(() => {
                                        a.value = 2, b.Close()
                                    }, 5e3);
                                    return
                                }
                            }
                        } catch (_) {
                            o.value = _
                        }
                        b.Close()
                    });
                return (m, b) => {
                    var g, k, x, E;
                    const _ = X("router-link"),
                        v = X("switch-box");
                    return a.value == 0 ? (i(), r("div", gv, [_v, hv, t("div", xv, [t("button", {
                        class: "cbi-button cbi-button-success app-btn app-next",
                        onClick: b[0] || (b[0] = A => a.value = 3)
                    }, "Automatic Configuration"), t("button", {
                        class: "cbi-button cbi-button-neutral app-btn app-next",
                        onClick: b[1] || (b[1] = A => d(!1))
                    }, "Manual Configuration"), D(_, {
                        to: "/network",
                        custom: ""
                    }, {
                        default: V(({
                            navigate: A
                        }) => [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: A
                        }, "Cancel", 8, kv)]),
                        _: 1
                    })])])) : a.value == 1 ? (i(), r("div", wv, [yv, Fv, t("form", {
                        onSubmit: nt(u, ["prevent"])
                    }, [t("label", null, [Cv, t("div", $v, [t("select", {
                        disabled: "",
                        style: It({
                            backgroundColor: "rgba(215, 215, 215, 1)",
                            color: "#333"
                        })
                    }, Bv, 4)])]), t("label", null, [Yv, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": b[2] || (b[2] = A => c.value.staticLanIp = A),
                        placeholder: "IP address",
                        required: ""
                    }, null, 512), [
                        [W, c.value.staticLanIp, void 0, {
                            trim: !0
                        }]
                    ])]), t("label", null, [Av, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": b[3] || (b[3] = A => c.value.subnetMask = A),
                        placeholder: "Subnet mask",
                        required: ""
                    }, null, 512), [
                        [W, c.value.subnetMask, void 0, {
                            trim: !0
                        }]
                    ])]), t("label", null, [Sv, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": b[4] || (b[4] = A => c.value.gateway = A),
                        placeholder: "Gateway address",
                        required: ""
                    }, null, 512), [
                        [W, c.value.gateway, void 0, {
                            trim: !0
                        }]
                    ])]), t("label", null, [zv, z(t("input", {
                        type: "text",
                        "onUpdate:modelValue": b[5] || (b[5] = A => c.value.staticDnsIp = A),
                        placeholder: "8.8.8.8",
                        required: ""
                    }, null, 512), [
                        [W, c.value.staticDnsIp, void 0, {
                            trim: !0
                        }]
                    ])]), o.value ? (i(), r("div", Pv, h(o.value), 1)) : C("", !0), t("div", Tv, [D(v, {
                        modelValue: c.value.enableDhcp,
                        "onUpdate:modelValue": b[6] || (b[6] = A => c.value.enableDhcp = A)
                    }, {
                        default: V(() => [c.value.enableDhcp ? (i(), r("span", Iv, ([U("Provide DHCPv4 service"), t("br"), U("(main router DHCP service needs to be turned off)")]))) : (i(), r("span", Lv, "Provide DHCPv4 service"))]),_: 1
                    }, 8, ["modelValue"])]), t("div", Mv, [D(v, {
                        modelValue: c.value.dhcp6c,
                        "onUpdate:modelValue": b[7] || (b[7] = A => c.value.dhcp6c = A)
                    }, {
                        default: V(() => [Ov]),
                        _: 1
                    }, 8, ["modelValue"])]), t("div", Nv, [qv, D(_, {
                        to: "/network",
                        custom: ""
                    }, {
                        default: V(({
                            navigate: A
                        }) => [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: A
                        }, "Cancel", 8, Vv)]),
                        _: 1
                    })])], 40, Ev)])) : a.value == 2 ? (i(), r("div", Gv, [jv, Rv, t("div", {
                        class: "btns"
                    }, [t("button", {
                        class: "cbi-button cbi-button-apply app-btn app-next",
                        onClick: l
                    }, "enter the console")])])) : a.value == 3 ? (i(), r("div", Uv, [Wv, Hv, Zv, t("button", {
                        class: ot(["cbi-button cbi-button-neutral", w(s) ? "cbi-button-neutral" : "cbi-button-success"]),
                        style: {
                            "line-height": "2",
                            "margin": "2rem 0",
                            "width": "100% !important"
                        },
                        disabled: n.value,
                        onClick: f
                    }, [Xv, t("p", Kv, [t("ul", null, [t("li", null, "IP address: " + h((g = p.value) == null ? void 0 : g.ipv4addr), 1), t("li", null, "Subnet mask: " + h(((k = p.value) == null ? void 0 : k.ipv4mask) && w(xt).prefixToMask(p.value.ipv4mask)), 1), t("li", null, "Gateway address: " + h((x = p.value) == null ? void 0 : x.gateway), 1), t("li", null, "DNS server: " + h(((E = p.value) == null ? void 0 : E.dnsList) && p.value.dnsList[0] || (w(s) ? "" : "(No DNS server, please fill in the public DNS server later, for example 8.8.8.8)")), 1)])])], 10, Jv), Qv, t("div", tg, [t("button", {
                        class: "cbi-button cbi-button-apply app-btn app-next",
                        disabled: w(s),
                        onClick: b[8] || (b[8] = A => d(!0))
                    }, "Auto fill" + h(w(s) ? " (Please obtain IPv4 Upstream information first!)" : ""), 9, eg), D(_, {
                        to: "/network",
                        custom: ""
                    }, {
                        default: V(({
                            navigate: A
                        }) => [t("button", {
                            class: "cbi-button cbi-button-remove app-btn app-back",
                            onClick: A
                        }, "Cancel", 8, ag)]),
                        _: 1
                    })])])) : C("", !0)
                }
            }
        });
    var ng = Y(og, [
        ["__scopeId", "data-v-1c3f186c"]
    ]);
    const zt = e => (O("data-v-7fc91c6d"), e = e(), N(), e),
        ig = {
            class: "actioner-container"
        },
        rg = zt(() => t("div", {
            class: "actioner-container_header"
        }, [t("span", null, "RAID\u521B\u5EFA\u5411\u5BFC")], -1)),
        sg = {
            class: "actioner-container_body"
        },
        dg = zt(() => t("p", null, "RAID\u78C1\u76D8\u9635\u5217\u662F\u7528\u591A\u4E2A\u72EC\u7ACB\u7684\u78C1\u76D8\u7EC4\u6210\u5728\u4E00\u8D77\u5F62\u6210\u4E00\u4E2A\u5927\u7684\u78C1\u76D8\u7CFB\u7EDF\uFF0C \u4ECE\u800C\u5B9E\u73B0\u6BD4\u5355\u5757\u78C1\u76D8\u66F4\u597D\u7684\u5B58\u50A8\u6027\u80FD\u548C\u66F4\u9AD8\u7684\u53EF\u9760\u6027\u3002", -1)),
        ug = {
            class: "label-item"
        },
        lg = zt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "RAID\u7EA7\u522B\uFF1A")], -1)),
        cg = {
            class: "label-item_value"
        },
        pg = ["value"],
        fg = {
            class: "label-item_tips"
        },
        mg = {
            class: "label-item"
        },
        bg = zt(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "\u78C1\u76D8\u9635\u5217\u6210\u5458\uFF1A")], -1)),
        vg = {
            key: 0,
            class: "label-item_value"
        },
        gg = zt(() => t("span", {
            class: "msg-warning"
        }, " Checking... ", -1)),
        _g = [gg],
        hg = {
            key: 1,
            class: "label-item_value"
        },
        xg = ["value"],
        kg = {
            key: 1,
            class: "msg-warning"
        },
        wg = {
            class: "label-item_tips"
        },
        yg = U(" \u9009\u62E9\u5C06\u8981\u7528\u4E8E\u521B\u5EFA RAID \u7684\u786C\u76D8\uFF0C\u901A\u8FC7 USB \u63A5\u5165\u7684\u8BBE\u5907\u4E0D\u4F1A\u5728\u5217\u8868\u4E2D\u663E\u793A\uFF08USB\u63A5\u5165\u4E0D\u7A33\u5B9A\uFF09\u3002 "),
        Fg = {
            class: "actioner-container_footer"
        },
        Eg = ["disabled"],
        Cg = ["disabled"],
        $g = {
            key: 1,
            class: "actioner-container_body setup-loading"
        },
        Dg = zt(() => t("span", null, "\u6B63\u5728\u521B\u5EFA\u4E2D...", -1)),
        Bg = {
            class: "actioner-container_body setup-error"
        },
        Yg = {
            class: "actioner-container_footer"
        },
        Ag = ["disabled"],
        Sg = {
            class: "actioner-container_body setup-success"
        },
        zg = zt(() => t("div", {
            class: "body-title"
        }, "\u521B\u5EFA\u6210\u529F", -1)),
        Pg = zt(() => t("div", {
            class: "body-info"
        }, [t("span", null, " \u5982\u9700\u5BF9raid\u8BBE\u5907\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\uFF0C\u9700\u8981\u5BF9raid\u8BBE\u5907\u683C\u5F0F\u5316\u5E76\u6302\u8F7D\u6587\u4EF6\u7CFB\u7EDF "), t("br"), t("span", null, [U(" \u53EF\u524D\u5F80 "), t("a", {
            href: "/cgi-bin/luci/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "\u9996\u9875-\u78C1\u76D8\u4FE1\u606F"), U(" \u8FDB\u884C\u6302\u8F7D ")])], -1)),
        Tg = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                },
                success: {
                    type: Function
                }
            },
            setup(e) {
                const a = e,
                    o = () => {
                        a.Close()
                    },
                    n = () => {
                        a.success && a.success()
                    },
                    s = y("init"),
                    c = y(""),
                    p = [{
                        name: "jbod",
                        title: "JBOD (\u7EBF\u6027)",
                        info: "\u81F3\u5C11\u9700\u89812\u5757\u786C\u76D8\uFF0C\u5C06\u591A\u4E2A\u786C\u76D8\u5408\u5E76\u4E3A\u5355\u4E2A\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5176\u5BB9\u91CF\u7B49\u4E8E\u6240\u6709\u786C\u76D8\u5BB9\u91CF\u7684\u603B\u548C\u3002\u4E0D\u63D0\u4F9B\u6570\u636E\u5197\u4F59\u3002",
                        select: 2
                    }, {
                        name: "raid0",
                        title: "RAID 0 (\u6761\u5E26)",
                        info: "\u81F3\u5C11\u9700\u89812\u5757\u786C\u76D8\uFF0C\u201C\u533A\u5757\u5EF6\u5C55\u201D\u529F\u80FD\u662F\u5C06\u6570\u636E\u5206\u6210\u591A\u4E2A\u5757\uFF0C\u5E76\u5C06\u6570\u636E\u5757\u5206\u6563\u5230\u7EC4\u6210\u7684\u591A\u4E2A\u786C\u76D8\u4E0A\u4EE5\u63D0\u9AD8\u6027\u80FD\u7684\u8FC7\u7A0B\u3002\u4E0D\u63D0\u4F9B\u6570\u636E\u5197\u4F59\u3002",
                        select: 2
                    }, {
                        name: "raid1",
                        title: "RAID 1 (\u955C\u50CF)",
                        info: "\u81F3\u5C11\u9700\u89812\u5757\u786C\u76D8\uFF0C\u540C\u65F6\u5411\u6240\u6709\u786C\u76D8\u5199\u5165\u76F8\u540C\u7684\u6570\u636E\u3002\u63D0\u4F9B\u6570\u636E\u5197\u4F59\u3002",
                        select: 2
                    }, {
                        name: "raid5",
                        title: "RAID 5 ",
                        info: "\u81F3\u5C11\u9700\u89813\u5757\u786C\u76D8\uFF0C\u6267\u884C\u6BB5\u843D\u5206\u5757\u5EF6\u5C55\uFF0C\u5E76\u5BF9\u5206\u5E03\u5230\u6240\u6709\u7EC4\u6210\u786C\u76D8\u4E0A\u7684\u6570\u636E\u6267\u884C\u5947\u5076\u6821\u9A8C\uFF0C\u4ECE\u800C\u63D0\u4F9B\u6BD4 RAID 1 \u66F4\u6709\u6548\u7684\u6570\u636E\u5197\u4F59\u3002",
                        select: 3
                    }, {
                        name: "raid6",
                        title: "RAID 6 ",
                        info: "\u81F3\u5C11\u9700\u89814\u5757\u786C\u76D8\uFF0C\u6267\u884C\u4E24\u4E2A\u5C42\u7EA7\u7684\u6570\u636E\u5947\u5076\u6821\u9A8C\u4EE5\u5B58\u50A8\u7B49\u4E8E 2 \u4E2A\u786C\u76D8\u5BB9\u91CF\u7684\u5197\u4F59\u6570\u636E\uFF0C\u63D0\u4F9B\u6BD4 RAID 5 \u66F4\u5927\u7A0B\u5EA6\u7684\u6570\u636E\u5197\u4F59\u3002",
                        select: 4
                    }, {
                        name: "raid10",
                        title: "RAID 10",
                        info: "\u81F3\u5C11\u9700\u89814\u5757\u786C\u76D8\uFF0C\u63D0\u4F9B RAID 0 \u7684\u6027\u80FD\u548C RAID 1 \u7684\u6570\u636E\u4FDD\u62A4\u7EA7\u522B\uFF0C\u5C06\u786C\u76D8\u7EC4\u5408\u8FDB\u955C\u50CF\u6570\u636E\u7684\u7531\u4E24\u4E2A\u786C\u76D8\u7EC4\u6210\u7684\u7EC4\u3002",
                        select: 4
                    }],
                    f = y("raid5"),
                    d = y([]),
                    l = g => {
                        let k = "";
                        return p.forEach(x => {
                            x.name === g && (k = x.info)
                        }), k
                    },
                    u = y(!1),
                    m = it({
                        loading: !1,
                        members: []
                    }),
                    b = g => {};
                (() => T(this, null, function* () {
                    m.loading = !0;
                    try {
                        const g = yield S.Raid.CreateList.GET();
                        if (g != null && g.data) {
                            const {
                                success: k,
                                error: x,
                                result: E
                            } = g.data;
                            if (E && (m.members = E.members || []), x) throw x
                        }
                    } catch (g) {
                        console.log(g)
                    } finally {
                        m.loading = !1
                    }
                }))();
                const v = () => T(this, null, function* () {
                    const g = p.filter(x => x.name === f.value)[0],
                        k = d.value;
                    if (!g) {
                        F.Warning("\u8BF7\u9009\u62E9raid\u7C7B\u578B");
                        return
                    }
                    if (k.length == 0) {
                        F.Warning("\u8BF7\u9009\u62E9\u78C1\u76D8");
                        return
                    }
                    if (g.select > k.length) {
                        F.Warning("\u8BF7\u9009\u62E9\u81F3\u5C11" + g.select + "\u5757\u78C1\u76D8");
                        return
                    }
                    if (!!confirm(`\u662F\u5426\u7ACB\u5373\u521B\u5EFA ${g.name}\uFF1F\u9009\u62E9\u7684\u786C\u76D8\u6240\u6709\u5206\u533A\u5C06\u4F1A\u88AB\u6E05\u9664\uFF0C\u6B64\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u786C\u76D8\u6570\u636E\u4E22\u5931\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002`) && !!confirm(`\u786E\u5B9A\u521B\u5EFA ${g.name}\uFF1F\u8BE5\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C`)) {
                        u.value = !0, s.value = "loading";
                        try {
                            const x = yield S.Raid.Create.POST({
                                level: g.name,
                                devicePaths: k
                            });
                            if (x.data) {
                                const {
                                    success: E,
                                    error: A,
                                    result: B
                                } = x.data;
                                if (A) throw A;
                                (E || 0) == 0 && (s.value = "success", n())
                            }
                        } catch (x) {
                            c.value = x, s.value = "error"
                        } finally {
                            u.value = !1
                        }
                    }
                });
                return (g, k) => {
                    const x = X("icon-loading"),
                        E = X("icon-error"),
                        A = X("icon-success");
                    return i(), r("div", ig, [rg, s.value == "init" ? (i(), r(L, {
                        key: 0
                    }, [t("div", sg, [dg, t("div", ug, [lg, t("div", cg, [z(t("select", {
                        "onUpdate:modelValue": k[0] || (k[0] = B => f.value = B),
                        onChange: b
                    }, [(i(), r(L, null, j(p, B => t("option", {
                        value: B.name
                    }, h(B.title), 9, pg)), 64))], 544), [
                        [Q, f.value]
                    ])]), t("div", fg, [D(gt), U(" " + h(l(f.value)), 1)])]), t("div", mg, [bg, w(m).loading ? (i(), r("div", vg, _g)) : (i(), r("div", hg, [w(m).members.length > 0 ? (i(!0), r(L, {
                        key: 0
                    }, j(w(m).members, B => (i(), r("label", null, [z(t("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": k[1] || (k[1] = $ => d.value = $),
                        value: B.path
                    }, null, 8, xg), [
                        [Lt, d.value]
                    ]), U(" \u3010" + h(B.model) + "\u3011" + h(B.name) + " " + h(B.path) + " [" + h(B.sizeStr) + "] ", 1)]))), 256)) : (i(), r("span", kg, " \u68C0\u6D4B\u4E0D\u5230\u53EF\u7528\u78C1\u76D8\u9635\u5217\u6210\u5458... "))])), t("div", wg, [D(gt), yg])])]), t("div", Fg, [t("div", {
                        class: "close",
                        onClick: o,
                        disabled: u.value
                    }, "\u53D6\u6D88", 8, Eg), t("div", {
                        class: "next",
                        onClick: v,
                        disabled: u.value
                    }, "\u521B\u5EFA", 8, Cg)])], 64)) : s.value == "loading" ? (i(), r("div", $g, [D(x, {
                        size: 60,
                        color: "#666"
                    }), Dg])) : s.value == "error" ? (i(), r(L, {
                        key: 2
                    }, [t("div", Bg, [D(E), t("span", null, h(c.value), 1)]), t("div", Yg, [t("div", {
                        class: "close",
                        onClick: o
                    }, "\u5173\u95ED"), t("div", {
                        class: "next",
                        onClick: v,
                        disabled: u.value
                    }, "\u91CD\u65B0\u521B\u5EFA", 8, Ag)])], 64)) : s.value == "success" ? (i(), r(L, {
                        key: 3
                    }, [t("div", Sg, [D(A), zg, Pg]), t("div", {
                        class: "actioner-container_footer"
                    }, [t("div", {
                        class: "close",
                        onClick: o
                    }, "\u5173\u95ED")])], 64)) : C("", !0)])
                }
            }
        });
    var Ig = Y(Tg, [
        ["__scopeId", "data-v-7fc91c6d"]
    ]);
    const Lg = {
            class: "actioner-container"
        },
        Mg = {
            class: "actioner-container_body"
        },
        Og = ["value"],
        Ng = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                },
                raid: {
                    type: Object,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = () => {
                        a.Close()
                    },
                    n = y("");
                return (() => {
                    S.Raid.Detail.POST({
                        path: a.raid.path
                    }).then(c => {
                        if (c.data) {
                            const {
                                result: p,
                                error: f
                            } = c.data;
                            f ? n.value = f : n.value = (p == null ? void 0 : p.detail) || ""
                        }
                    }).catch(c => {
                        n.value = c.message
                    })
                })(), (c, p) => (i(), r("div", Lg, [t("div", Mg, [t("textarea", {
                    value: n.value
                }, null, 8, Og)]), t("div", {
                    class: "actioner-container_footer"
                }, [t("div", {
                    class: "close",
                    onClick: o
                }, "\u5173\u95ED")])]))
            }
        });
    var qg = Y(Ng, [
        ["__scopeId", "data-v-51f9d7a2"]
    ]);
    const Pe = e => (O("data-v-c07c8244"), e = e(), N(), e),
        Vg = {
            class: "actioner-container"
        },
        Gg = {
            class: "actioner-container_header"
        },
        jg = {
            class: "actioner-container_body"
        },
        Rg = {
            class: "label-item"
        },
        Ug = Pe(() => t("div", {
            class: "label-item_key"
        }, " \u8BBE\u5907 ", -1)),
        Wg = {
            class: "label-item_value"
        },
        Hg = {
            disabled: ""
        },
        Zg = {
            class: "label-item"
        },
        Jg = Pe(() => t("div", {
            class: "label-item_key"
        }, " \u9009\u62E9\u786C\u76D8\uFF08\u9009\u62E9\u88AB\u6DFB\u52A0\u5230RAID\u7684\u786C\u76D8\uFF09\uFF1A ", -1)),
        Xg = {
            key: 0,
            class: "label-item_value"
        },
        Kg = Pe(() => t("span", {
            class: "msg-warning"
        }, " Checking... ", -1)),
        Qg = [Kg],
        t_ = {
            key: 1,
            class: "label-item_value"
        },
        e_ = ["value"],
        a_ = {
            key: 1,
            class: "msg-warning"
        },
        o_ = {
            class: "actioner-container_footer"
        },
        n_ = ["disabled"],
        i_ = ["disabled"],
        r_ = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                },
                raid: {
                    type: Object,
                    required: !0
                },
                success: {
                    type: Function
                }
            },
            setup(e) {
                const a = e,
                    o = () => {
                        a.Close()
                    },
                    n = () => {
                        a.success && a.success()
                    },
                    s = () => T(this, null, function* () {
                        const l = f.value;
                        if (l == "") {
                            F.Warning("\u8BF7\u9009\u62E9\u8981\u6DFB\u52A0\u7684\u786C\u76D8");
                            return
                        }
                        p.value = !0;
                        const u = F.Loading("\u4FDD\u5B58\u4E2D...");
                        try {
                            const m = yield S.Raid.Add.POST({
                                path: a.raid.path,
                                memberPath: l
                            });
                            if (m.data) {
                                const {
                                    error: b,
                                    success: _
                                } = m.data;
                                if (b) throw b;
                                (_ || 0) == 0 && (F.Success("\u4FDD\u5B58\u6210\u529F"), n(), o())
                            }
                        } catch (m) {
                            F.Error(`${m}`)
                        } finally {
                            p.value = !1, u.Close()
                        }
                    }),
                    c = it({
                        loading: !1,
                        members: []
                    }),
                    p = y(!1),
                    f = y("");
                return (() => T(this, null, function* () {
                    c.loading = !0, p.value = !0;
                    try {
                        const l = yield S.Raid.CreateList.GET();
                        if (l != null && l.data) {
                            const {
                                success: u,
                                error: m,
                                result: b
                            } = l.data;
                            if (b && (c.members = b.members || []), m) throw m
                        }
                    } catch (l) {
                        console.log(l)
                    } finally {
                        p.value = !1, c.loading = !1
                    }
                }))(), (l, u) => (i(), r("div", Vg, [t("div", Gg, [t("span", null, "RAID - " + h(e.raid.name) + " \u4FEE\u6539", 1)]), t("div", jg, [t("div", Rg, [Ug, t("div", Wg, [t("select", Hg, [t("option", null, h(e.raid.name) + "_" + h(e.raid.venderModel) + " (" + h(e.raid.path) + "\uFF0C" + h(e.raid.level) + "\uFF0C" + h(e.raid.size) + ") ", 1)])])]), t("div", Zg, [Jg, w(c).loading ? (i(), r("div", Xg, Qg)) : (i(), r("div", t_, [w(c).members.length > 0 ? (i(!0), r(L, {
                    key: 0
                }, j(w(c).members, m => (i(), r("label", null, [z(t("input", {
                    type: "radio",
                    "onUpdate:modelValue": u[0] || (u[0] = b => f.value = b),
                    value: m.path
                }, null, 8, e_), [
                    [ft, f.value]
                ]), U(" \u3010" + h(m.model) + "\u3011" + h(m.name) + " " + h(m.path) + " [" + h(m.sizeStr) + "] ", 1)]))), 256)) : (i(), r("span", a_, " \u68C0\u6D4B\u4E0D\u5230\u53EF\u7528\u78C1\u76D8\u9635\u5217\u6210\u5458... "))]))])]), t("div", o_, [t("div", {
                    class: "close",
                    onClick: o,
                    disabled: p.value
                }, "\u53D6\u6D88", 8, n_), t("div", {
                    class: "next",
                    onClick: s,
                    disabled: p.value
                }, "\u4FDD\u5B58", 8, i_)])]))
            }
        });
    var s_ = Y(r_, [
        ["__scopeId", "data-v-c07c8244"]
    ]);
    const va = e => (O("data-v-13dc2cd6"), e = e(), N(), e),
        d_ = {
            class: "actioner-container"
        },
        u_ = {
            class: "actioner-container_header"
        },
        l_ = {
            class: "actioner-container_body"
        },
        c_ = {
            class: "label-item"
        },
        p_ = va(() => t("div", {
            class: "label-item_key"
        }, " \u8BBE\u5907 ", -1)),
        f_ = {
            class: "label-item_value"
        },
        m_ = {
            disabled: ""
        },
        b_ = {
            class: "label-item"
        },
        v_ = va(() => t("div", {
            class: "label-item_key"
        }, " \u9009\u62E9\u786C\u76D8\uFF08\u9009\u62E9\u8981\u4ECERAID\u9635\u5217\u4E2D\u5220\u9664\u7684\u786C\u76D8\uFF09\uFF1A ", -1)),
        g_ = {
            class: "label-item_value"
        },
        __ = ["value"],
        h_ = {
            class: "actioner-container_footer"
        },
        x_ = ["disabled"],
        k_ = ["disabled"],
        w_ = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                },
                raid: {
                    type: Object,
                    required: !0
                },
                success: {
                    type: Function
                }
            },
            setup(e) {
                const a = e,
                    o = () => {
                        a.Close()
                    },
                    n = () => {
                        a.success && a.success()
                    },
                    s = () => T(this, null, function* () {
                        const f = p.value;
                        if (f == "") {
                            F.Warning("\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u786C\u76D8");
                            return
                        }
                        c.value = !0;
                        const d = F.Loading("\u4FDD\u5B58\u4E2D...");
                        try {
                            const l = yield S.Raid.Remove.POST({
                                path: a.raid.path,
                                memberPath: f
                            });
                            if (l.data) {
                                const {
                                    error: u,
                                    success: m
                                } = l.data;
                                if (u) throw u;
                                (m || 0) == 0 && (F.Success("\u4FDD\u5B58\u6210\u529F"), n(), o())
                            }
                        } catch (l) {
                            F.Error(`${l}`)
                        } finally {
                            c.value = !1, d.Close()
                        }
                    }),
                    c = y(!1),
                    p = y("");
                return (f, d) => (i(), r("div", d_, [t("div", u_, [t("span", null, "RAID - " + h(e.raid.name) + " \u79FB\u9664", 1)]), t("div", l_, [t("div", c_, [p_, t("div", f_, [t("select", m_, [t("option", null, h(e.raid.name) + "_" + h(e.raid.venderModel) + " (" + h(e.raid.path) + "\uFF0C" + h(e.raid.level) + "\uFF0C" + h(e.raid.size) + ") ", 1)])])]), t("div", b_, [v_, t("div", g_, [(i(!0), r(L, null, j(e.raid.members, l => (i(), r("label", null, [z(t("input", {
                    type: "radio",
                    "onUpdate:modelValue": d[0] || (d[0] = u => p.value = u),
                    value: l
                }, null, 8, __), [
                    [ft, p.value]
                ]), U(" " + h(l), 1)]))), 256))])])]), t("div", h_, [t("div", {
                    class: "close",
                    onClick: o,
                    disabled: c.value
                }, "\u53D6\u6D88", 8, x_), t("div", {
                    class: "next",
                    onClick: s,
                    disabled: c.value
                }, "\u4FDD\u5B58", 8, k_)])]))
            }
        });
    var y_ = Y(w_, [
        ["__scopeId", "data-v-13dc2cd6"]
    ]);
    const Te = e => (O("data-v-5643983d"), e = e(), N(), e),
        F_ = {
            class: "actioner-container"
        },
        E_ = {
            class: "actioner-container_header"
        },
        C_ = {
            class: "actioner-container_body"
        },
        $_ = {
            class: "label-item"
        },
        D_ = Te(() => t("div", {
            class: "label-item_key"
        }, " \u8BBE\u5907 ", -1)),
        B_ = {
            class: "label-item_value"
        },
        Y_ = {
            disabled: ""
        },
        A_ = {
            class: "label-item"
        },
        S_ = Te(() => t("div", {
            class: "label-item_key"
        }, " \u9009\u62E9\u786C\u76D8\uFF08\u9009\u62E9\u7A7A\u95F2\u7684\u786C\u76D8\u6062\u590DRAID\u8BBE\u5907\uFF09\uFF1A ", -1)),
        z_ = {
            key: 0,
            class: "label-item_value"
        },
        P_ = Te(() => t("span", {
            class: "msg-warning"
        }, " Checking... ", -1)),
        T_ = [P_],
        I_ = {
            key: 1,
            class: "label-item_value"
        },
        L_ = ["value"],
        M_ = {
            key: 1,
            class: "msg-warning"
        },
        O_ = {
            class: "actioner-container_footer"
        },
        N_ = ["disabled"],
        q_ = ["disabled"],
        V_ = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                },
                raid: {
                    type: Object,
                    required: !0
                },
                success: {
                    type: Function
                }
            },
            setup(e) {
                const a = e,
                    o = () => {
                        a.Close()
                    },
                    n = () => {
                        a.success && a.success()
                    },
                    s = () => T(this, null, function* () {
                        const l = f.value;
                        if (l == "") {
                            F.Warning("\u8BF7\u9009\u62E9\u8981\u6DFB\u52A0\u7684\u786C\u76D8");
                            return
                        }
                        p.value = !0;
                        const u = F.Loading("\u4FDD\u5B58\u4E2D...");
                        try {
                            const m = yield S.Raid.Recover.POST({
                                path: a.raid.path,
                                memberPath: l
                            });
                            if (m.data) {
                                const {
                                    error: b,
                                    success: _
                                } = m.data;
                                if (b) throw b;
                                (_ || 0) == 0 && (F.Success("\u4FDD\u5B58\u6210\u529F"), n(), o())
                            }
                        } catch (m) {
                            F.Error(`${m}`)
                        } finally {
                            p.value = !1, u.Close()
                        }
                    }),
                    c = it({
                        loading: !1,
                        members: []
                    }),
                    p = y(!1),
                    f = y("");
                return (() => T(this, null, function* () {
                    c.loading = !0, p.value = !0;
                    try {
                        const l = yield S.Raid.CreateList.GET();
                        if (l != null && l.data) {
                            const {
                                success: u,
                                error: m,
                                result: b
                            } = l.data;
                            if (b && (c.members = b.members || []), m) throw m
                        }
                    } catch (l) {
                        console.log(l)
                    } finally {
                        p.value = !1, c.loading = !1
                    }
                }))(), (l, u) => (i(), r("div", F_, [t("div", E_, [t("span", null, "RAID - " + h(e.raid.name) + " \u6062\u590D", 1)]), t("div", C_, [t("div", $_, [D_, t("div", B_, [t("select", Y_, [t("option", null, h(e.raid.name) + "_" + h(e.raid.venderModel) + " (" + h(e.raid.path) + "\uFF0C" + h(e.raid.level) + "\uFF0C" + h(e.raid.size) + ") ", 1)])])]), t("div", A_, [S_, w(c).loading ? (i(), r("div", z_, T_)) : (i(), r("div", I_, [w(c).members.length > 0 ? (i(!0), r(L, {
                    key: 0
                }, j(w(c).members, m => (i(), r("label", null, [z(t("input", {
                    type: "radio",
                    "onUpdate:modelValue": u[0] || (u[0] = b => f.value = b),
                    value: m.path
                }, null, 8, L_), [
                    [ft, f.value]
                ]), U(" \u3010" + h(m.model) + "\u3011" + h(m.name) + " " + h(m.path) + " [" + h(m.sizeStr) + "] ", 1)]))), 256)) : (i(), r("span", M_, " \u68C0\u6D4B\u4E0D\u5230\u53EF\u7528\u78C1\u76D8\u9635\u5217\u6210\u5458... "))]))])]), t("div", O_, [t("div", {
                    class: "close",
                    onClick: o,
                    disabled: p.value
                }, "\u53D6\u6D88", 8, N_), t("div", {
                    class: "next",
                    onClick: s,
                    disabled: p.value
                }, "\u4FDD\u5B58", 8, q_)])]))
            }
        });
    var G_ = Y(V_, [
        ["__scopeId", "data-v-5643983d"]
    ]);
    const j_ = {
            class: "action-main"
        },
        R_ = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                },
                setup: {
                    type: String,
                    default: "create"
                },
                raid: {
                    type: Object
                },
                success: {
                    type: Function
                }
            },
            setup(e) {
                return (a, o) => (i(), M(et, {
                    type: 2
                }, {
                    default: V(() => [t("div", j_, [e.setup == "create" ? (i(), M(Ig, {
                        key: 0,
                        Close: e.Close
                    }, null, 8, ["Close"])) : e.setup == "info" && e.raid != null ? (i(), M(qg, {
                        key: 1,
                        Close: e.Close,
                        raid: e.raid,
                        success: e.success
                    }, null, 8, ["Close", "raid", "success"])) : e.setup == "edit" && e.raid != null ? (i(), M(s_, {
                        key: 2,
                        Close: e.Close,
                        raid: e.raid,
                        success: e.success
                    }, null, 8, ["Close", "raid", "success"])) : e.setup == "remove" && e.raid != null ? (i(), M(y_, {
                        key: 3,
                        Close: e.Close,
                        raid: e.raid,
                        success: e.success
                    }, null, 8, ["Close", "raid", "success"])) : e.setup == "recover" && e.raid != null ? (i(), M(G_, {
                        key: 4,
                        Close: e.Close,
                        raid: e.raid,
                        success: e.success
                    }, null, 8, ["Close", "raid", "success"])) : C("", !0)])]),
                    _: 1
                }))
            }
        });
    var U_ = Y(R_, [
        ["__scopeId", "data-v-6ef94d02"]
    ]);
    const Jt = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(U_, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.use(aa), o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            };
            return {
                Close: n
            }
        },
        re = e => (O("data-v-535a673b"), e = e(), N(), e),
        W_ = {
            id: "page"
        },
        H_ = re(() => t("h2", {
            name: "content"
        }, "RAID Manager", -1)),
        Z_ = re(() => t("div", {
            class: "cbi-map-descr"
        }, [t("p", null, " RAID \uFF08 Redundant Array of Independent Disks \uFF09\u5373\u72EC\u7ACB\u78C1\u76D8\u5197\u4F59\u9635\u5217\uFF0C\u7B80\u79F0\u4E3A\u300C\u78C1\u76D8\u9635\u5217\u300D\uFF0C \u5C31\u662F\u7528\u591A\u4E2A\u72EC\u7ACB\u7684\u78C1\u76D8\u7EC4\u6210\u5728\u4E00\u8D77\u5F62\u6210\u4E00\u4E2A\u5927\u7684\u78C1\u76D8\u7CFB\u7EDF\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6BD4\u5355\u5757\u78C1\u76D8\u66F4\u597D\u7684\u5B58\u50A8\u6027\u80FD\u548C\u66F4\u9AD8\u7684\u53EF\u9760\u6027\u3002 "), t("p", {
            style: {
                color: "#f5365b",
                "margin-top": "10px"
            }
        }, " * RAID\u529F\u80FD\u6B63\u5728\u516C\u6D4B\u4E2D\uFF0C\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u5982\u9020\u6210\u6570\u636E\u4E22\u5931\u7B49\u95EE\u9898\uFF0C\u6982\u4E0D\u8D1F\u8D23\uFF0C\u8BF7\u8C28\u614E\u4F7F\u7528\u3002 "), t("p", {
            style: {
                color: "#f5365b",
                "margin-top": "10px"
            }
        }, " * \u5982\u679C\u7531\u4E8E\u7CFB\u7EDF\u91CD\u7F6E\u6216\u91CD\u542F\u5BFC\u81F4\u7684RAID\u8BBE\u5907\u4E22\u5931\u53EF\u4EE5\u5C1D\u8BD5\u901A\u8FC7\u4E0B\u65B9'\u626B\u63CF\u6062\u590DRAID'\u6309\u94AE\u6062\u590D ")], -1)),
        J_ = {
            class: "btns"
        },
        X_ = ["disabled"],
        K_ = {
            class: "cbi-section cbi-tblsection",
            id: "cbi-nfs-mount"
        },
        Q_ = {
            class: "table cbi-section-table"
        },
        th = {
            style: {}
        },
        eh = re(() => t("tr", {
            class: "tr cbi-section-table-titles anonymous"
        }, [t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "\u540D\u79F0"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "\u8BBE\u5907"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "\u72B6\u6001"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "\u7EA7\u522B"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "\u5BB9\u91CF"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "\u6210\u5458"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "\u6302\u8F7D\u4FE1\u606F"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "\u64CD\u4F5C")], -1)),
        ah = {
            class: "tr cbi-section-table-row"
        },
        oh = {
            class: "td cbi-value-field"
        },
        nh = {
            class: "td cbi-value-field"
        },
        ih = ["title"],
        rh = {
            class: "item-status"
        },
        sh = {
            key: 0,
            class: "item-status item-status-detail"
        },
        dh = {
            class: "td cbi-value-field"
        },
        uh = {
            class: "td cbi-value-field"
        },
        lh = {
            class: "td cbi-value-field"
        },
        ch = re(() => t("br", null, null, -1)),
        ph = {
            class: "td cbi-value-field"
        },
        fh = re(() => t("br", null, null, -1)),
        mh = {
            key: 1,
            href: "/cgi-bin/luci/admin/quickstart/"
        },
        bh = {
            class: "td cbi-section-table-cell nowrap cbi-section-actions"
        },
        vh = ["disabled", "onClick"],
        gh = ["disabled", "onClick"],
        _h = ["onClick"],
        hh = ["onClick"],
        xh = ["onClick"],
        kh = P({
            setup(e) {
                const a = it({
                        disksList: []
                    }),
                    o = () => T(this, null, function* () {
                        try {
                            const v = yield S.Raid.List.GET();
                            if (v != null && v.data) {
                                const {
                                    success: g,
                                    error: k,
                                    result: x
                                } = v.data;
                                if (x && (a.disksList = x.disks || []), k) throw k
                            }
                        } catch (v) {
                            console.log(v)
                        }
                    }),
                    n = yt.easyInterval(o, 5e3);
                Fe(() => {
                    n()
                });
                const s = v => {
                        switch (v.level) {
                            case "raid0":
                            case "jbod":
                                return !0
                        }
                        return v.status.indexOf("degraded") != -1 || v.status.indexOf("resyncing(") != -1
                    },
                    c = v => {
                        let g = [];
                        return v.childrens && v.childrens.forEach(k => {
                            k.mountPoint && g.push(`${k.name}(${k.mountPoint})`)
                        }), g
                    },
                    p = () => T(this, null, function* () {
                        Jt({
                            setup: "create",
                            success: () => {
                                o()
                            }
                        })
                    }),
                    f = v => {
                        Jt({
                            setup: "info",
                            raid: v
                        })
                    },
                    d = v => T(this, null, function* () {
                        if (v.childrens && v.childrens.length > 0 && v.childrens.filter(x => x.mountPoint).length > 0) {
                            de({
                                content: "\u5220\u9664 RAID \u8BBE\u5907\u4E4B\u524D\u8BF7\u5148\u5378\u8F7D\u6587\u4EF6\u7CFB\u7EDF",
                                nextTitle: "\u53BB\u5378\u8F7D",
                                next: () => {
                                    location.href = "/cgi-bin/luci/admin/system/mounts"
                                },
                                clearTitle: "\u53D6\u6D88",
                                clear: () => {}
                            });
                            return
                        }
                        if (!confirm(`\u786E\u5B9A\u8981\u5220\u9664 ${v.name} \u8BE5\u78C1\u76D8\u9635\u5217\u5417\uFF1F\u5220\u9664\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002\u5220\u9664\u6210\u529F\u540E\uFF0C\u5982\u9700\u53E6\u5916\u7EC4RAID\uFF0C\u5EFA\u8BAE\u7A0D\u7B49\u51E0\u5206\u949F\u540E\u518D\u8BD5\u3002`) || !confirm(`\u786E\u5B9A\u8981\u5220\u9664 ${v.name} \u5417?`)) return;
                        const g = F.Loading("\u5220\u9664\u4E2D...");
                        try {
                            const k = yield S.Raid.Delete.POST({
                                path: v.path,
                                members: v.members
                            });
                            if (k.data) {
                                const {
                                    success: x,
                                    error: E
                                } = k.data;
                                if (E) throw E;
                                (x || 0) == 0 && (F.Success("\u5220\u9664\u6210\u529F"), o())
                            }
                        } catch (k) {
                            F.Error(`${k}`)
                        } finally {
                            g.Close()
                        }
                    }),
                    l = v => {
                        Jt({
                            setup: "edit",
                            raid: v,
                            success: () => {
                                o()
                            }
                        })
                    },
                    u = v => {
                        Jt({
                            setup: "remove",
                            raid: v,
                            success: () => {
                                o()
                            }
                        })
                    },
                    m = v => {
                        Jt({
                            setup: "recover",
                            raid: v,
                            success: () => {
                                o()
                            }
                        })
                    },
                    b = y(!1),
                    _ = () => {
                        de({
                            content: "\u5C06\u626B\u63CF\u78C1\u76D8\u91CC RAID \u7684\u78C1\u76D8\u9635\u5217\u914D\u7F6E\u5E76\u6062\u590D\uFF0C\u786E\u5B9A\u8981\u6062\u590D RAID \u78C1\u76D8\u9635\u5217\u5417\uFF1F",
                            nextTitle: "\u786E\u5B9A",
                            next: () => T(this, null, function* () {
                                b.value = !0;
                                const v = F.Loading("\u626B\u63CF\u4E2D...");
                                try {
                                    const g = yield S.Raid.Autofix.GET();
                                    if (g.data) {
                                        const {
                                            error: k,
                                            success: x
                                        } = g.data;
                                        if (k) throw k;
                                        (x || 0) == 0 && (F.Success("\u6062\u590D\u5B8C\u6210"), o())
                                    }
                                } catch (g) {
                                    F.Error(`${g}`)
                                } finally {
                                    v.Close(), b.value = !1
                                }
                            }),
                            clearTitle: "\u53D6\u6D88",
                            clear: () => {}
                        })
                    };
                return (v, g) => (i(), r("div", W_, [H_, Z_, t("div", J_, [t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    onClick: g[0] || (g[0] = k => p())
                }, "\u521B\u5EFARAID"), t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    onClick: g[1] || (g[1] = k => _()),
                    disabled: b.value
                }, "\u626B\u63CF\u6062\u590DRAID", 8, X_)]), t("div", null, [t("div", K_, [t("table", Q_, [t("tbody", th, [eh, (i(!0), r(L, null, j(w(a).disksList, k => (i(), r("tr", ah, [t("td", oh, [t("b", null, h(k.name), 1)]), t("td", nh, [t("b", null, h(k.path), 1)]), t("td", {
                    class: "td cbi-value-field",
                    title: k.status + (k.rebuildStatus || "")
                }, [t("b", rh, h(k.status), 1), k.rebuildStatus ? (i(), r("b", sh, " \u2026 ")) : C("", !0)], 8, ih), t("td", dh, [t("b", null, h(k.level), 1)]), t("td", uh, [t("b", null, h(k.size), 1)]), t("td", lh, [(i(!0), r(L, null, j(k.members, x => (i(), r("b", null, [U(h(x) + " ", 1), ch]))), 256))]), t("td", ph, [c(k).length > 0 ? (i(!0), r(L, {
                    key: 0
                }, j(c(k), x => (i(), r("b", null, [U(h(x) + " ", 1), fh]))), 256)) : (i(), r("a", mh, "\u53BB\u6302\u8F7D"))]), t("td", bh, [t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    title: "\u6269\u5145",
                    disabled: s(k),
                    onClick: x => l(k)
                }, "\u6269\u5145", 8, vh), t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    title: "\u79FB\u9664",
                    disabled: s(k),
                    onClick: x => u(k)
                }, "\u79FB\u9664", 8, gh), t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    title: "\u6062\u590D",
                    onClick: x => m(k)
                }, "\u6062\u590D", 8, _h), t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    title: "\u8BE6\u60C5",
                    onClick: x => f(k)
                }, "\u8BE6\u60C5", 8, hh), t("button", {
                    class: "cbi-button cbi-button-remove",
                    title: "\u5982\u679C\u60A8\u5728RAID\u78C1\u76D8\u9635\u5217\u4E2D\u521B\u5EFA\u4E86\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5148\u5378\u8F7D\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u540E\u5220\u9664\u6587\u4EF6\u7CFB\u7EDF\u5220\u9664\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002",
                    onClick: x => d(k)
                }, "\u5220\u9664", 8, xh)])]))), 256))])])])])]))
            }
        });
    var wh = Y(kh, [
        ["__scopeId", "data-v-535a673b"]
    ]);
    const ga = e => (O("data-v-2bc40d1c"), e = e(), N(), e),
        yh = {
            id: "page"
        },
        Fh = ga(() => t("h2", {
            name: "content"
        }, "Self-Monitoring Analysis and Reporting Technology", -1)),
        Eh = ga(() => t("div", {
            class: "cbi-map-descr"
        }, [t("p", null, "Automatic hard drive status detection and early warning specification system through detection clues in hard drive hardware, such as magnetic heads, disks, and drive motors."), t("p", null, "Circuit operation is monitored, logged, and compared to preset safety values ​​set by manufacturer. If monitoring situation is close to or has exceeded the security range of the preset security value, then monitoring hardware or software in host computer can automatically warn user and perform small automatic repairs to ensure the safety of hard disk data in advance.")], -1)),
        Ch = {
            class: "tabs"
        },
        $h = ["href", "onClick"],
        Dh = P({
            setup(e) {
                const a = [{
                        to: "/smart",
                        name: "Settings"
                    }, {
                        to: "/smart/task",
                        name: "Scheduled Tasks"
                    }, {
                        to: "/smart/log",
                        name: "Logs"
                    }],
                    o = y(!1),
                    n = it({
                        global: {
                            enable: !1,
                            powermode: "never",
                            tmpDiff: 0,
                            tmpMax: 0
                        },
                        devices: [],
                        tasks: []
                    }),
                    s = f => {
                        const {
                            global: d,
                            devices: l,
                            tasks: u
                        } = f;
                        d && (n.global.enable = d.enable || !1, n.global.powermode = d.powermode || "never"), n.devices = l || [], n.tasks = u || []
                    };
                (() => T(this, null, function* () {
                    try {
                        const f = yield S.Smart.Config.GET();
                        if (f.data) {
                            const {
                                result: d
                            } = f.data;
                            d && s(d)
                        }
                    } catch (f) {} finally {
                        o.value = !0
                    }
                }))();
                const p = f => T(this, null, function* () {
                    const d = F.Loading("Saving...");
                    try {
                        const l = yield S.Smart.Config.POST(f);
                        if (l.data) {
                            console.log(l.data);
                            const {
                                success: u,
                                error: m,
                                result: b
                            } = l.data;
                            if (m) throw m;
                            (u || 0) == 0 && (F.Success("Configuration successfully"), b && s(b))
                        }
                    } catch (l) {
                        F.Error(`${l}`)
                    } finally {
                        d.Close()
                    }
                });
                return (f, d) => {
                    const l = X("router-link"),
                        u = X("router-view");
                    return i(), r("div", yh, [Fh, Eh, t("ul", Ch, [(i(), r(L, null, j(a, m => D(l, {
                        to: m.to,
                        custom: "",
                        key: m.to
                    }, {
                        default: V(({
                            route: b,
                            href: _,
                            navigate: v,
                            isActive: g,
                            isExactActive: k
                        }) => [t("li", {
                            class: ot({
                                "active cbi-tab": g && k
                            })
                        }, [t("a", {
                            href: _,
                            onClick: v
                        }, h(m.name), 9, $h)], 2)]),
                        _: 2
                    }, 1032, ["to"])), 64))]), o.value ? (i(), M(u, {
                        key: 0,
                        name: "default"
                    }, {
                        default: V(({
                            Component: m,
                            route: b
                        }) => [(i(), M(Ia, null, {
                            default: V(() => [(i(), M(La(m), {
                                key: b.path,
                                config: w(n),
                                saveData: p
                            }, null, 8, ["config"]))]),
                            _: 2
                        }, 1024))]),
                        _: 1
                    })) : C("", !0)])
                }
            }
        });
    var Bh = Y(Dh, [
        ["__scopeId", "data-v-2bc40d1c"]
    ]);
    const Yh = {
            class: "action-main"
        },
        Ah = P({
            setup(e) {
                return (a, o) => (i(), M(et, {
                    type: 2
                }, {
                    default: V(() => [t("div", Yh, [Dt(a.$slots, "default", {}, void 0, !0)])]),
                    _: 3
                }))
            }
        });
    var he = Y(Ah, [
        ["__scopeId", "data-v-742230ae"]
    ]);
    const Sh = {
            class: "actioner-container"
        },
        zh = {
            class: "actioner-container_header"
        },
        Ph = {
            class: "actioner-container_body"
        },
        Th = {
            class: "cbi-value"
        },
        Ih = t("label", {
            class: "cbi-value-title"
        }, "Disk", -1),
        Lh = {
            class: "cbi-value-field"
        },
        Mh = {
            class: "cbi-value-description"
        },
        Oh = {
            class: "cbi-value"
        },
        Nh = t("label", {
            class: "cbi-value-title"
        }, "Temperature Monitoring (Difference)", -1),
        qh = {
            class: "cbi-value-field"
        },
        Vh = {
            class: "cbi-checkbox"
        },
        Gh = t("option", {
            value: -1
        }, "Use global configuration", -1),
        jh = t("option", {
            value: 0
        }, "Disabled", -1),
        Rh = ["value"],
        Uh = t("div", {
            class: "cbi-value-description"
        }, "Report if temperature has changed by at least N degrees since the last report.", -1),
        Wh = {
            class: "cbi-value"
        },
        Hh = t("label", {
            class: "cbi-value-title"
        }, "Temperature Monitoring (Maximum)", -1),
        Zh = {
            class: "cbi-value-field"
        },
        Jh = {
            class: "cbi-checkbox"
        },
        Xh = t("option", {
            value: -1
        }, "Use global configuration", -1),
        Kh = t("option", {
            value: 0
        }, "Disable", -1),
        Qh = ["value"],
        tx = t("div", {
            class: "cbi-value-description"
        }, "Report if temperature is greater than or equal to N degrees Celsius.", -1),
        ex = {
            class: "actioner-container_footer"
        },
        ax = ["disabled"],
        ox = ["disabled"],
        nx = P({
            props: {
                close: {
                    type: Function,
                    required: !0
                },
                disk: {
                    type: Object,
                    required: !0
                },
                device: {
                    type: Object
                },
                next: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                var p, f, d;
                const a = e;
                console.log(a.device);
                const o = y(!1),
                    n = it({
                        tmpDiff: ((p = a.device) == null ? void 0 : p.tmpDiff) || 0,
                        tmpMax: ((f = a.device) == null ? void 0 : f.tmpMax) || 0,
                        devicePath: ((d = a.device) == null ? void 0 : d.devicePath) || ""
                    }),
                    s = () => {
                        o.value = !0, a.close()
                    },
                    c = () => T(this, null, function* () {
                        o.value = !0;
                        try {
                            yield a.next({
                                tmpDiff: n.tmpDiff,
                                tmpMax: n.tmpMax,
                                devicePath: n.devicePath
                            }), o.value = !1, s()
                        } catch (l) {}
                    });
                return (l, u) => (i(), M(he, null, {
                    default: V(() => [t("div", Sh, [t("div", zh, [t("span", null, " S.M.A.R.T Disk \xBB " + h(e.disk.path), 1)]), t("div", Ph, [t("div", Th, [Ih, t("div", Lh, [t("div", Mh, h(e.disk.model) + " [ " + h(e.disk.path) + "\uFF0C" + h(e.disk.sizeStr) + " ] ", 1)])]), t("div", Oh, [Nh, t("div", qh, [t("div", Vh, [z(t("select", {
                        class: "cbi-input-select",
                        "onUpdate:modelValue": u[0] || (u[0] = m => w(n).tmpDiff = m)
                    }, [Gh, jh, (i(), r(L, null, j(20, m => t("option", {
                        value: m
                    }, h(m) + "\xB0C", 9, Rh)), 64))], 512), [
                        [Q, w(n).tmpDiff, void 0, {
                            number: !0
                        }]
                    ])]), Uh])]), t("div", Wh, [Hh, t("div", Zh, [t("div", Jh, [z(t("select", {
                        class: "cbi-input-select",
                        "onUpdate:modelValue": u[1] || (u[1] = m => w(n).tmpMax = m)
                    }, [Xh, Kh, (i(), r(L, null, j(20, m => t("option", {
                        value: m * 5
                    }, h(m * 5) + "\xB0C", 9, Qh)), 64))], 512), [
                        [Q, w(n).tmpMax, void 0, {
                            number: !0
                        }]
                    ])]), tx])])]), t("div", ex, [t("button", {
                        class: "btn cbi-button cbi-button-apply",
                        onClick: c,
                        disabled: o.value
                    }, "Save & Apply", 8, ox), t("button", {
                        class: "btn cbi-button cbi-button-remove",
                        onClick: s,
                        disabled: o.value
                    }, "Cancel", 8, ax)])])]),
                    _: 1
                }))
            }
        }),
        ix = {
            class: "actioner-container"
        },
        rx = t("div", {
            class: "actioner-container_header"
        }, [t("span", null, "Create a scheduled task")], -1),
        sx = {
            class: "actioner-container_body"
        },
        dx = {
            class: "cbi-value"
        },
        ux = t("label", {
            class: "cbi-value-title"
        }, "Disk", -1),
        lx = {
            class: "cbi-value-field"
        },
        cx = {
            class: "cbi-checkbox"
        },
        px = t("option", {
            value: ""
        }, "Select disk", -1),
        fx = ["value"],
        mx = {
            class: "cbi-value"
        },
        bx = t("label", {
            class: "cbi-value-title"
        }, "Type", -1),
        vx = {
            class: "cbi-value-field"
        },
        gx = {
            class: "cbi-checkbox"
        },
        _x = t("option", {
            value: "short"
        }, "Short self-test", -1),
        hx = t("option", {
            value: "long"
        }, "Long self-test", -1),
        xx = t("option", {
            value: "conveyance"
        }, "Self-test during transmission", -1),
        kx = t("option", {
            value: "offline"
        }, "Self-test when offline", -1),
        wx = [_x, hx, xx, kx],
        yx = {
            class: "cbi-value"
        },
        Fx = t("label", {
            class: "cbi-value-title"
        }, "Hour", -1),
        Ex = {
            class: "cbi-value-field"
        },
        Cx = {
            class: "cbi-checkbox"
        },
        $x = t("option", {
            value: "*"
        }, "*", -1),
        Dx = ["value"],
        Bx = t("div", {
            class: "cbi-value-description"
        }, " * Means hourly", -1),
        Yx = {
            class: "cbi-value"
        },
        Ax = t("label", {
            class: "cbi-value-title"
        }, "Days", -1),
        Sx = {
            class: "cbi-value-field"
        },
        zx = {
            class: "cbi-checkbox"
        },
        Px = t("option", {
            value: "*"
        }, "*", -1),
        Tx = ["value"],
        Ix = t("div", {
            class: "cbi-value-description"
        }, " * Means every day", -1),
        Lx = {
            class: "cbi-value"
        },
        Mx = t("label", {
            class: "cbi-value-title"
        }, "Month", -1),
        Ox = {
            class: "cbi-value-field"
        },
        Nx = {
            class: "cbi-checkbox"
        },
        qx = t("option", {
            value: "*"
        }, "*", -1),
        Vx = ["value"],
        Gx = t("div", {
            class: "cbi-value-description"
        }, " * Means monthly", -1),
        jx = {
            class: "actioner-container_footer"
        },
        Rx = ["disabled"],
        Ux = ["disabled"],
        Wx = P({
            props: {
                close: {
                    type: Function,
                    required: !0
                },
                config: {
                    type: Object,
                    required: !0
                },
                next: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(!1),
                    n = it({
                        type: "short",
                        devicePath: "",
                        month: "*",
                        dayPerMonth: "*",
                        hour: "*"
                    }),
                    s = y([]);
                (() => T(this, null, function* () {
                    try {
                        const d = yield S.Smart.List.GET();
                        if (d.data) {
                            const {
                                result: l,
                                error: u
                            } = d.data;
                            l && l.disks && (s.value = l.disks)
                        }
                    } catch (d) {}
                }))();
                const p = () => {
                        o.value = !0, a.close()
                    },
                    f = () => T(this, null, function* () {
                        if (n.devicePath == "") {
                            F.Warning("Please select a disk");
                            return
                        }
                        o.value = !0;
                        try {
                            yield a.next(n), p()
                        } catch (d) {} finally {
                            o.value = !1
                        }
                    });
                return (d, l) => (i(), M(he, null, {
                    default: V(() => [t("div", ix, [rx, t("div", sx, [t("div", dx, [ux, t("div", lx, [t("div", cx, [z(t("select", {
                        class: "cbi-input-select",
                        "onUpdate:modelValue": l[0] || (l[0] = u => w(n).devicePath = u)
                    }, [px, (i(!0), r(L, null, j(s.value, u => (i(), r("option", {
                        value: u.path
                    }, h(u.model) + " [ " + h(u.path) + "\uFF0C" + h(u.sizeStr) + " ] ", 9, fx))), 256))], 512), [
                        [Q, w(n).devicePath, void 0, {
                            trim: !0
                        }]
                    ])])])]), t("div", mx, [bx, t("div", vx, [t("div", gx, [z(t("select", {
                        class: "cbi-input-select",
                        "onUpdate:modelValue": l[1] || (l[1] = u => w(n).type = u)
                    }, wx, 512), [
                        [Q, w(n).type, void 0, {
                            trim: !0
                        }]
                    ])])])]), t("div", yx, [Fx, t("div", Ex, [t("div", Cx, [z(t("select", {
                        class: "cbi-input-select",
                        "onUpdate:modelValue": l[2] || (l[2] = u => w(n).hour = u)
                    }, [$x, (i(), r(L, null, j(24, (u, m) => t("option", {
                        value: `${m}`
                    }, h(m), 9, Dx)), 64))], 512), [
                        [Q, w(n).hour, void 0, {
                            trim: !0
                        }]
                    ])]), Bx])]), t("div", Yx, [Ax, t("div", Sx, [t("div", zx, [z(t("select", {
                        class: "cbi-input-select",
                        "onUpdate:modelValue": l[3] || (l[3] = u => w(n).dayPerMonth = u)
                    }, [Px, (i(), r(L, null, j(31, u => t("option", {
                        value: `${u}`
                    }, h(u), 9, Tx)), 64))], 512), [
                        [Q, w(n).dayPerMonth, void 0, {
                            trim: !0
                        }]
                    ])]), Ix])]), t("div", Lx, [Mx, t("div", Ox, [t("div", Nx, [z(t("select", {
                        class: "cbi-input-select",
                        "onUpdate:modelValue": l[4] || (l[4] = u => w(n).month = u)
                    }, [qx, (i(), r(L, null, j(12, (u, m) => t("option", {
                        value: `${u}`
                    }, h(u), 9, Vx)), 64))], 512), [
                        [Q, w(n).month, void 0, {
                            trim: !0
                        }]
                    ])]), Gx])])]), t("div", jx, [t("button", {
                        class: "btn cbi-button cbi-button-apply",
                        onClick: f,
                        disabled: o.value
                    }, "Save & Apply", 8, Ux), t("button", {
                        class: "btn cbi-button cbi-button-remove",
                        onClick: p,
                        disabled: o.value
                    }, "Cancel", 8, Rx)])])]),
                    _: 1
                }))
            }
        }),
        Hx = e => (O("data-v-3f7c551e"), e = e(), N(), e),
        Zx = {
            class: "actioner-container"
        },
        Jx = Hx(() => t("div", {
            class: "actioner-container_header"
        }, [t("span", null, "Run debug")], -1)),
        Xx = {
            class: "actioner-container_body"
        },
        Kx = ["value"],
        Qx = {
            class: "actioner-container_footer"
        },
        tk = ["disabled"],
        ek = ["disabled"],
        ak = P({
            props: {
                close: {
                    type: Function,
                    required: !0
                },
                task: {
                    type: Object,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(!1),
                    n = y(""),
                    s = y(""),
                    c = y(""),
                    p = () => T(this, null, function* () {
                        n.value += ".";
                        try {
                            const u = yield S.Smart.Test.Result.POST({
                                type: "selftest",
                                devicePath: a.task.devicePath || ""
                            });
                            if (u.data) {
                                const {
                                    result: m,
                                    error: b
                                } = u.data;
                                m && m.result && (c.value = m.result), b && (c.value = b)
                            }
                        } catch (u) {
                            u && (c.value = u)
                        }
                    }),
                    f = yt.easyInterval(p, 5e3);
                Fe(() => {
                    f()
                });
                const d = () => {
                        o.value = !0, f(), a.close()
                    },
                    l = () => T(this, null, function* () {
                        o.value = !0;
                        try {
                            const u = yield S.Smart.Test.POST({
                                type: a.task.type || "short",
                                devicePath: a.task.devicePath || ""
                            });
                            if (u.data) {
                                const {
                                    success: m,
                                    error: b,
                                    result: _
                                } = u.data;
                                b && (s.value = b), _ && _.result && (s.value = _.result)
                            }
                        } catch (u) {
                            s.value = u
                        } finally {}
                    });
                return (u, m) => (i(), M(he, null, {
                    default: V(() => [t("div", Zx, [Jx, t("div", Xx, [t("textarea", {
                        value: s.value + `
` + c.value + `
` + n.value,
                        disabled: ""
                    }, null, 8, Kx)]), t("div", Qx, [t("div", {
                        class: "close",
                        onClick: d,
                        disabled: o.value
                    }, "\u5173\u95ED", 8, tk), o.value ? C("", !0) : (i(), r("div", {
                        key: 0,
                        class: "next",
                        onClick: l,
                        disabled: o.value
                    }, "\u8FD0\u884C", 8, ek))])])]),
                    _: 1
                }))
            }
        });
    var ok = Y(ak, [
        ["__scopeId", "data-v-3f7c551e"]
    ]);
    const qt = e => (O("data-v-7d3ebf99"), e = e(), N(), e),
        nk = {
            class: "actioner-container"
        },
        ik = {
            class: "actioner-container_header"
        },
        rk = {
            class: "tabs"
        },
        sk = qt(() => t("a", null, "Device Information", -1)),
        dk = [sk],
        uk = qt(() => t("a", null, "Property", -1)),
        lk = [uk],
        ck = qt(() => t("a", null, "Self-test Log", -1)),
        pk = [ck],
        fk = qt(() => t("a", null, "Extended Information", -1)),
        mk = [fk],
        bk = {
            class: "actioner-container_body"
        },
        vk = {
            key: 0,
            class: "table"
        },
        gk = {
            class: "tr"
        },
        _k = qt(() => t("td", {
            class: "td left"
        }, "Device", -1)),
        hk = {
            class: "td left"
        },
        xk = {
            class: "tr"
        },
        kk = qt(() => t("td", {
            class: "td left"
        }, "Model", -1)),
        wk = {
            class: "td left"
        },
        yk = {
            class: "tr"
        },
        Fk = qt(() => t("td", {
            class: "td left"
        }, "Serial Number", -1)),
        Ek = {
            class: "td left"
        },
        Ck = ["value"],
        $k = ["value"],
        Dk = ["value"],
        Bk = {
            class: "actioner-container_footer"
        },
        Yk = ["disabled"],
        Ak = P({
            props: {
                close: {
                    type: Function,
                    required: !0
                },
                disk: {
                    type: Object,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(!1),
                    n = y("info"),
                    s = u => {
                        switch (n.value = u, u) {
                            case "info":
                                break;
                            case "attribute":
                                d();
                                break;
                            case "log":
                                f();
                                break;
                            case "extend":
                                l();
                                break
                        }
                    },
                    c = () => {
                        o.value = !0, a.close()
                    },
                    p = it({
                        log: "",
                        attribute: "",
                        extend: ""
                    }),
                    f = () => T(this, null, function* () {
                        try {
                            const u = yield S.Smart.Test.Result.POST({
                                type: "selftest",
                                devicePath: a.disk.path || ""
                            });
                            if (u.data) {
                                const {
                                    result: m,
                                    error: b
                                } = u.data;
                                m && m.result && (p.log = m.result), b && (p.log = b)
                            }
                        } catch (u) {
                            p.log = u
                        }
                    }),
                    d = () => T(this, null, function* () {
                        try {
                            const u = yield S.Smart.Attribute.Result.POST({
                                devicePath: a.disk.path || ""
                            });
                            if (u.data) {
                                const {
                                    result: m,
                                    error: b
                                } = u.data;
                                m && m.result && (p.attribute = m.result), b && (p.attribute = b)
                            }
                        } catch (u) {
                            p.attribute = u
                        }
                    }),
                    l = () => T(this, null, function* () {
                        try {
                            const u = yield S.Smart.Extend.Result.POST({
                                devicePath: a.disk.path || ""
                            });
                            if (u.data) {
                                const {
                                    result: m,
                                    error: b
                                } = u.data;
                                m && m.result && (p.extend = m.result), b && (p.extend = b)
                            }
                        } catch (u) {
                            p.extend = u
                        }
                    });
                return (u, m) => (i(), M(he, null, {
                    default: V(() => [t("div", nk, [t("div", ik, [t("ul", rk, [t("li", {
                        class: ot({
                            "active cbi-tab": n.value == "info"
                        }),
                        onClick: m[0] || (m[0] = b => s("info"))
                    }, dk, 2), t("li", {
                        class: ot({
                            "active cbi-tab": n.value == "attribute"
                        }),
                        onClick: m[1] || (m[1] = b => s("attribute"))
                    }, lk, 2), t("li", {
                        class: ot({
                            "active cbi-tab": n.value == "log"
                        }),
                        onClick: m[2] || (m[2] = b => s("log"))
                    }, pk, 2), t("li", {
                        class: ot({
                            "active cbi-tab": n.value == "extend"
                        }),
                        onClick: m[3] || (m[3] = b => s("extend"))
                    }, mk, 2)])]), t("div", bk, [n.value == "info" ? (i(), r("table", vk, [t("tr", gk, [_k, t("td", hk, h(e.disk.path), 1)]), t("tr", xk, [kk, t("td", wk, h(e.disk.model), 1)]), t("tr", yk, [Fk, t("td", Ek, h(e.disk.serial), 1)])])) : n.value == "attribute" ? (i(), r("textarea", {
                        key: 1,
                        disabled: "",
                        value: w(p).attribute
                    }, null, 8, Ck)) : n.value == "log" ? (i(), r("textarea", {
                        key: 2,
                        disabled: "",
                        value: w(p).log
                    }, null, 8, $k)) : n.value == "extend" ? (i(), r("textarea", {
                        key: 3,
                        disabled: "",
                        value: w(p).extend
                    }, null, 8, Dk)) : C("", !0)]), t("div", Bk, [t("div", {
                        class: "btn cbi-button cbi-button-remove",
                        onClick: c,
                        disabled: o.value
                    }, "Exit", 8, Yk)])])]),
                    _: 1
                }))
            }
        });
    var Sk = Y(Ak, [
        ["__scopeId", "data-v-7d3ebf99"]
    ]);
    const zk = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = D(nx, at(J({}, e), {
                    close: () => {
                        n()
                    }
                })),
                n = () => {
                    a.remove()
                };
            ue(o, a)
        },
        Pk = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = D(Wx, at(J({}, e), {
                    close: () => {
                        n()
                    }
                })),
                n = () => {
                    a.remove()
                };
            ue(o, a)
        },
        Tk = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = D(ok, at(J({}, e), {
                    close: () => {
                        n()
                    }
                })),
                n = () => {
                    a.remove()
                };
            ue(o, a)
        },
        Ik = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = D(Sk, at(J({}, e), {
                    close: () => {
                        n()
                    }
                })),
                n = () => {
                    a.remove()
                };
            ue(o, a)
        },
        Lk = {
            class: "cbi-section"
        },
        Mk = {
            class: "cbi-value"
        },
        Ok = t("label", {
            class: "cbi-value-title"
        }, "Enable", -1),
        Nk = {
            class: "cbi-value-field"
        },
        qk = {
            class: "cbi-checkbox"
        },
        Vk = ["value"],
        Gk = {
            class: "cbi-value"
        },
        jk = t("label", {
            class: "cbi-value-title"
        }, "Power Mode", -1),
        Rk = {
            class: "cbi-value-field"
        },
        Uk = {
            class: "cbi-checkbox"
        },
        Wk = t("option", {
            value: "never"
        }, "Never", -1),
        Hk = t("option", {
            value: "sleep"
        }, "Sleep", -1),
        Zk = t("option", {
            value: "standby"
        }, "Standby", -1),
        Jk = t("option", {
            value: "idle"
        }, "Idle", -1),
        Xk = [Wk, Hk, Zk, Jk],
        Kk = t("div", {
            class: "cbi-value-description"
        }, [t("span", null, "The disk will rotate during the test, please select the appropriate mode to control the rotation of the disk."), t("br"), t("span", null, "Always test to check the disk no matter what power mode it is in, when checking, this may cause a stalled disk to start spinning."), t("br"), t("span", null, "Sleep In sleep mode the device is not checked."), t("br"), t("span", null, "Standby does not check the device in standby and sleep mode. In this mode, the disk generally does not rotate. If you don't want to rotate the disk every time you check, then this mode is more suitable."), t("br"), t("span", null, "Idle does not check devices in standby, sleep, idle mode, and in idle most disks are still spinning, so this might not work for you.")], -1),
        Qk = {
            class: "cbi-value"
        },
        tw = t("label", {
            class: "cbi-value-title"
        }, "Temperature Monitoring (Difference)", -1),
        ew = {
            class: "cbi-value-field"
        },
        aw = {
            class: "cbi-checkbox"
        },
        ow = t("option", {
            value: 0
        }, "Disable", -1),
        nw = ["value"],
        iw = t("div", {
            class: "cbi-value-description"
        }, "Report if temperature has changed by at least N degrees since the last report.", -1),
        rw = {
            class: "cbi-value"
        },
        sw = t("label", {
            class: "cbi-value-title"
        }, "Temperature Monitoring (Maximum)", -1),
        dw = {
            class: "cbi-value-field"
        },
        uw = {
            class: "cbi-checkbox"
        },
        lw = t("option", {
            value: 0
        }, "Disable", -1),
        cw = ["value"],
        pw = t("div", {
            class: "cbi-value-description"
        }, "Report if temperature is greater than or equal to N degrees Celsius.", -1),
        fw = {
            class: "cbi-section cbi-tblsection",
            id: "cbi-nfs-mount"
        },
        mw = {
            class: "table cbi-section-table"
        },
        bw = t("thead", null, [t("tr", {
            class: "tr cbi-section-table-titles anonymous"
        }, [t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Path"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Model"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Serial Number"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Size"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Temp"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Status"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Health"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "")])], -1),
        vw = {
            class: "tr cbi-section-table-row"
        },
        gw = {
            class: "td cbi-value-field"
        },
        _w = {
            class: "td cbi-value-field"
        },
        hw = {
            class: "td cbi-value-field"
        },
        xw = {
            class: "td cbi-value-field"
        },
        kw = {
            class: "td cbi-value-field"
        },
        ww = {
            class: "td cbi-value-field"
        },
        yw = {
            class: "td cbi-value-field"
        },
        Fw = {
            class: "td cbi-value-field"
        },
        Ew = ["onClick"],
        Cw = ["onClick"],
        $w = P({
            props: {
                config: {
                    type: Object,
                    required: !0
                },
                saveData: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = it(a.config),
                    n = () => {
                        o.global.tmpDiff = a.config.global.tmpDiff || 0, o.global.tmpMax = a.config.global.tmpMax || 0, o.global.enable = a.config.global.enable || !1, o.global.powermode = a.config.global.powermode || "never", o.devices = a.config.devices || [], o.tasks = a.config.tasks || []
                    },
                    s = y([]),
                    c = () => T(this, null, function* () {
                        try {
                            const u = yield S.Smart.List.GET();
                            if (u.data) {
                                const {
                                    result: m,
                                    error: b
                                } = u.data;
                                m && m.disks && (s.value = m.disks || [])
                            }
                        } catch (u) {}
                    }),
                    p = yt.easyInterval(c, 5e3);
                Fe(() => {
                    p()
                });
                const f = () => T(this, null, function* () {
                        yield a.saveData({
                            global: o.global,
                            devices: a.config.devices,
                            tasks: a.config.tasks
                        }), n()
                    }),
                    d = u => {
                        Ik({
                            disk: u
                        })
                    },
                    l = (u, m) => T(this, null, function* () {
                        let b = null,
                            _ = -1;
                        if (o.devices) {
                            for (let v = 0; v < o.devices.length; v++)
                                if (o.devices[v].devicePath == u.path) {
                                    b = o.devices[v], _ = v;
                                    break
                                }
                        }
                        zk({
                            disk: u,
                            device: b,
                            next: v => T(this, null, function* () {
                                v.tmpDiff == -1 && (v.tmpDiff = o.global.tmpDiff), v.tmpMax == -1 && (v.tmpMax = o.global.tmpMax), v.devicePath == "" && (v.devicePath = u.path);
                                let g = [...o.devices];
                                _ >= 0 && (g[_] = v);
                                const k = new Map;
                                g.forEach(x => {
                                    x.devicePath != null && k.set(x.devicePath, null)
                                });
                                for (let x = 0; x < s.value.length; x++) {
                                    const E = s.value[x];
                                    E.path != null && !k.has(E.path) && g.push({
                                        devicePath: E.path,
                                        tmpDiff: o.global.tmpDiff,
                                        tmpMax: o.global.tmpMax
                                    })
                                }
                                yield a.saveData({
                                    tasks: a.config.tasks,
                                    global: a.config.global,
                                    devices: g
                                }), n()
                            })
                        })
                    });
                return (u, m) => (i(), r(L, null, [t("fieldset", Lk, [t("div", Mk, [Ok, t("div", Nk, [t("div", qk, [z(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": m[0] || (m[0] = b => w(o).global.enable = b),
                    value: !w(o).global.enable
                }, null, 8, Vk), [
                    [Lt, w(o).global.enable]
                ])])])]), t("div", Gk, [jk, t("div", Rk, [t("div", Uk, [z(t("select", {
                    class: "cbi-input-select",
                    "onUpdate:modelValue": m[1] || (m[1] = b => w(o).global.powermode = b)
                }, Xk, 512), [
                    [Q, w(o).global.powermode, void 0, {
                        trim: !0
                    }]
                ])]), Kk])]), t("div", Qk, [tw, t("div", ew, [t("div", aw, [z(t("select", {
                    class: "cbi-input-select",
                    "onUpdate:modelValue": m[2] || (m[2] = b => w(o).global.tmpDiff = b)
                }, [ow, (i(), r(L, null, j(15, b => t("option", {
                    value: b
                }, h(b) + "\xB0C", 9, nw)), 64))], 512), [
                    [Q, w(o).global.tmpDiff, void 0, {
                        number: !0
                    }]
                ])]), iw])]), t("div", rw, [sw, t("div", dw, [t("div", uw, [z(t("select", {
                    class: "cbi-input-select",
                    "onUpdate:modelValue": m[3] || (m[3] = b => w(o).global.tmpMax = b)
                }, [lw, (i(), r(L, null, j(20, b => t("option", {
                    value: b * 5
                }, h(b * 5) + "\xB0C", 9, cw)), 64))], 512), [
                    [Q, w(o).global.tmpMax, void 0, {
                        number: !0
                    }]
                ])]), pw])])]), t("div", fw, [t("h3", null, "Disks", -1), t("table", mw, [bw, t("tbody", null, [(i(!0), r(L, null, j(s.value, (b, _) => (i(), r("tr", vw, [t("td", gw, [t("b", null, h(b.path), 1)]), t("td", _w, [t("b", null, h(b.model), 1)]), t("td", hw, [t("b", null, h(b.serial), 1)]), t("td", xw, [t("b", null, h(b.sizeStr), 1)]), t("td", kw, [t("b", null, h(b.temp), 1)]), t("td", ww, [t("b", null, h(b.status), 1)]), t("td", yw, [t("b", null, h(b.health), 1)]), t("td", Fw, [t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    title: "edit",
                    onClick: v => l(b)
                }, "Edit", 8, Ew), t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    title: "details",
                    onClick: v => d(b)
                }, "Details", 8, Cw)])]))), 256))])])]), t("span", {
                    class: "cbi-page-actions control-group"
                }, [t("input", {
                    class: "btn cbi-button cbi-button-apply",
                    type: "button",
                    value: "Save & Apply",
                    onClick: f
                })])], 64))
            }
        }),
        Dw = {
            class: "cbi-section cbi-tblsection",
            id: "cbi-nfs-mount"
        },
        Bw = {
            class: "table cbi-section-table"
        },
        Yw = t("thead", null, [t("tr", {
            class: "tr cbi-section-table-titles anonymous"
        }, [t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Device"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Type"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "Scheduling"), t("th", {
            class: "th cbi-section-table-cell",
            "data-widget": "value"
        }, "")])], -1),
        Aw = {
            class: "tr cbi-section-table-row"
        },
        Sw = {
            class: "td cbi-value-field"
        },
        zw = {
            class: "td cbi-value-field"
        },
        Pw = {
            class: "td cbi-value-field"
        },
        Tw = {
            class: "td cbi-value-field"
        },
        Iw = ["onClick"],
        Lw = ["onClick"],
        Mw = P({
            props: {
                config: {
                    type: Object,
                    required: !0
                },
                saveData: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = it(a.config),
                    n = f => {
                        switch (f) {
                            case "short":
                                return "Short self-test";
                            case "long":
                                return "Long self-test";
                            case "conveyance":
                                return "Self-test during transmission";
                            case "offline":
                                return "Self-test when offline";
                            default:
                                return "Unknown"
                        }
                    },
                    s = () => {
                        Pk({
                            config: a.config,
                            disks: [],
                            next: f => T(this, null, function* () {
                                yield a.saveData({
                                    tasks: [...o.tasks, f],
                                    global: a.config.global,
                                    devices: a.config.devices
                                }), o.tasks = a.config.tasks || []
                            })
                        })
                    },
                    c = f => T(this, null, function* () {
                        const d = [...o.tasks];
                        d.splice(f, 1), yield a.saveData({
                            tasks: d,
                            global: a.config.global,
                            devices: a.config.devices
                        }), o.tasks = a.config.tasks || []
                    }),
                    p = f => {
                        Tk({
                            task: f
                        })
                    };
                return (f, d) => (i(), r(L, null, [t("div", Dw, [t("h3", null, "Device Schedules"), t("table", Bw, [Yw, t("tbody", null, [(i(!0), r(L, null, j(w(o).tasks, (l, u) => (i(), r("tr", Aw, [t("td", Sw, [t("b", null, h(l.devicePath), 1)]), t("td", zw, [t("b", null, h(n(l.type)), 1)]), t("td", Pw, [t("b", null, h(l.month) + "/" + h(l.dayPerMonth) + "/" + h(l.hour), 1)]), t("td", Tw, [t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    title: "Edit",
                    onClick: m => p(l)
                }, "Edit", 8, Iw), t("button", {
                    class: "cbi-button cbi-button-remove",
                    title: "Delete",
                    onClick: m => c(u)
                }, "Delete", 8, Lw)])]))), 256))])]),
                t("button", {
                    class: "btn cbi-button cbi-button-add",
                    onClick: d[0] || (d[0] = l => s())
                }, "Add")])], 64))
            }
        }),
        Ow = {
            class: "cbi-section"
        },
        Nw = ["value"],
        qw = P({
            setup(e) {
                return T(this, null, function* () {
                    let a, o;
                    const n = y(""),
                        s = () => T(this, null, function* () {
                            try {
                                const c = yield S.Smart.Log.GET();
                                if (c.data) {
                                    const {
                                        result: p,
                                        error: f
                                    } = c.data;
                                    p && p.result && (n.value = p.result), f && (n.value = f)
                                }
                            } catch (c) {
                                n.value = c
                            }
                        });
                    return [a, o] = Ma(() => s()), yield a, o(), (c, p) => (i(), r("fieldset", Ow, [t("textarea", {
                        value: n.value,
                        disabled: ""
                    }, null, 8, Nw)]))
                })
            }
        });
    var Vw = Y(qw, [
        ["__scopeId", "data-v-76197cba"]
    ]);
    const Gw = {},
        jw = {
            t: "1659511092204",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2332",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            width: "200",
            height: "200"
        },
        Rw = t("path", {
            d: "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z",
            "p-id": "2333"
        }, null, -1),
        Uw = [Rw];

    function Ww(e, a) {
        return i(), r("svg", jw, Uw)
    }
    var Ze = Y(Gw, [
        ["render", Ww]
    ]);
    const xe = e => (O("data-v-2f7b866f"), e = e(), N(), e),
        Hw = ["onSubmit"],
        Zw = {
            class: "actioner-dns_header"
        },
        Jw = {
            key: 0
        },
        Xw = {
            key: 1
        },
        Kw = {
            class: "actioner-dns_body"
        },
        Qw = {
            class: "label-item"
        },
        ty = xe(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "Name")], -1)),
        ey = {
            class: "label-item_value"
        },
        ay = {
            class: "label-item"
        },
        oy = xe(() => t("div", {
            class: "label-item_key"
        }, [t("span", null, "Protocol (Network Acquisition Method)")], -1)),
        ny = {
            class: "label-item_value"
        },
        iy = xe(() => t("option", {
            value: "dhcp"
        }, "DHCP Client", -1)),
        ry = {
            key: 0,
            value: "pppoe"
        },
        sy = xe(() => t("option", {
            value: "static"
        }, "Static Address", -1)),
        dy = {
            class: "actioner-dns_footer"
        },
        uy = ["disabled"],
        ly = P({
            props: {
                Close: {
                    type: Function,
                    required: !0
                },
                e: {
                    type: String,
                    required: !0
                },
                name: {
                    type: String,
                    required: !0
                },
                inface: {
                    type: Object,
                    required: !0
                },
                next: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = e,
                    o = y(!1),
                    n = y(a.inface),
                    s = () => T(this, null, function* () {
                        F.Loading("Configuration...").Close(), a.next(n.value), c()
                    }),
                    c = () => {
                        a.Close && a.Close()
                    };
                return (p, f) => (i(), M(et, {
                    Close: e.Close,
                    type: 1
                }, {
                    default: V(() => [t("form", {
                        class: "actioner-dns",
                        onSubmit: nt(s, ["prevent"])
                    }, [t("div", Zw, [e.name == "wan" ? (i(), r("span", Jw, h(e.e == "edit" ? "Edit WAN" : "Add WAN"), 1)) : (i(), r("span", Xw, h(e.e == "edit" ? "Edit LAN" : "Add LAN"), 1))]), t("div", Kw, [t("div", Qw, [ty, t("div", ey, [t("span", null, h(n.value.name.toLocaleUpperCase()), 1)])]), t("div", ay, [oy, t("div", ny, [z(t("select", {
                        "onUpdate:modelValue": f[0] || (f[0] = d => n.value.proto = d)
                    }, [iy, e.name == "wan" ? (i(), r("option", ry, "PPPoE")) : C("", !0), sy], 512), [
                        [Q, n.value.proto]
                    ])])])]), t("div", dy, [t("button", {
                        class: "cbi-button cbi-button-apply app-btn",
                        disabled: o.value
                    }, "Save", 8, uy), t("button", {
                        class: "cbi-button cbi-button-remove app-btn app-back",
                        onClick: c
                    }, "Cancel")])], 40, Hw)]),
                    _: 1
                }, 8, ["Close"]))
            }
        });
    var cy = Y(ly, [
        ["__scopeId", "data-v-2f7b866f"]
    ]);
    const Je = e => {
            const a = document.createElement("div");
            document.body.appendChild(a);
            const o = tt(cy, at(J({}, e), {
                Close: () => {
                    n()
                }
            }));
            o.mount(a);
            const n = () => {
                o.unmount(), a.remove()
            }
        },
        vt = e => (O("data-v-589588f0"), e = e(), N(), e),
        py = {
            id: "page"
        },
        fy = vt(() => t("h2", {
            name: "content"
        }, "Network Port Configuration", -1)),
        my = {
            class: "cbi-section cbi-tblsection",
            id: "cbi-nfs-mount"
        },
        by = {
            class: "table cbi-section-table"
        },
        vy = {
            width: "200"
        },
        gy = vt(() => t("col", null, null, -1)),
        _y = vt(() => t("col", null, null, -1)),
        hy = vt(() => t("col", {
            width: "200"
        }, null, -1)),
        xy = {
            class: "tr cbi-section-table-cell"
        },
        ky = {
            class: "th cbi-section-table-cell interface-device",
            "data-widget": "value"
        },
        wy = {
            class: "interface-device-flex"
        },
        yy = vt(() => t("th", {
            style: {
                width: "10px"
            }
        }, null, -1)),
        Fy = vt(() => t("th", {
            style: {
                width: "32px"
            }
        }, null, -1)),
        Ey = vt(() => t("th", null, null, -1)),
        Cy = {
            class: "tr cbi-section-table-row cbi-rowstyle-1"
        },
        $y = {
            class: "td cbi-value-field interface-device info"
        },
        Dy = ["name", "value", "onUpdate:modelValue", "onInput"],
        By = vt(() => t("td", {
            class: "td cbi-value-field"
        }, null, -1)),
        Yy = {
            class: "td cbi-value-field"
        },
        Ay = {
            class: "td cbi-value-field btns"
        },
        Sy = ["onClick"],
        zy = ["onClick"],
        Py = {
            class: "tr cbi-section-table-row cbi-rowstyle-1"
        },
        Ty = {
            class: "td cbi-value-field"
        },
        Iy = vt(() => t("td", {
            class: "td cbi-value-field"
        }, null, -1)),
        Ly = vt(() => t("td", {
            class: "td cbi-value-field"
        }, null, -1)),
        My = {
            class: "tr cbi-section-table-row cbi-rowstyle-1"
        },
        Oy = {
            class: "td cbi-value-field interface-device info",
            "data-widget": "value"
        },
        Ny = ["name", "value", "onUpdate:modelValue", "onInput"],
        qy = vt(() => t("td", {
            class: "td cbi-value-field"
        }, null, -1)),
        Vy = {
            class: "td cbi-value-field"
        },
        Gy = {
            class: "td cbi-value-field btns"
        },
        jy = ["onClick"],
        Ry = ["onClick"],
        Uy = {
            class: "tr cbi-section-table-row cbi-rowstyle-1"
        },
        Wy = {
            class: "td cbi-value-field"
        },
        Hy = vt(() => t("td", {
            class: "td cbi-value-field"
        }, null, -1)),
        Zy = vt(() => t("td", {
            class: "td cbi-value-field"
        }, null, -1)),
        Jy = {
            class: "cbi-page-actions control-group"
        },
        Xy = ["disabled"],
        Ky = P({
            setup(e) {
                const a = it({
                        devices: [],
                        interfaces: []
                    }),
                    o = y(!1),
                    n = it({
                        lan: [],
                        wan: []
                    });
                (() => {
                    S.Network.GetInterfaceConfig.GET().then(m => {
                        if (m.data) {
                            const {
                                result: b
                            } = m.data;
                            if (b) {
                                a.devices = b.devices || [], a.interfaces = b.interfaces || [];
                                for (let _ = 0; _ < a.interfaces.length; _++) a.interfaces[_].firewallType == "wan" ? n.wan.push(a.interfaces[_]) : a.interfaces[_].firewallType == "lan" && n.lan.push(a.interfaces[_])
                            }
                        }
                    })
                })();
                const c = (m, b) => {
                        m == "wan" ? n.wan.splice(b, 1) : m == "lan" && n.lan.splice(b, 1)
                    },
                    p = (m, b) => {
                        if (b == null) {
                            let _ = m == "wan" ? n.wan.length : n.lan.length;
                            _ == 6 && m == "wan" && _++, Je({
                                e: "add",
                                name: m,
                                inface: {
                                    name: m + `${_}`,
                                    proto: "dhcp",
                                    ipv4Addr: "",
                                    ipv6Addr: "",
                                    portName: "",
                                    deviceNames: [],
                                    ports: [],
                                    firewallType: m
                                },
                                next: v => {
                                    m == "wan" ? n.wan.push(v) : n.lan.push(v), F.Message("Please go to the 'Network-Interface' page to configure detailed parameters of the interface")
                                }
                            })
                        } else Je({
                            e: "edit",
                            name: m,
                            inface: m == "wan" ? n.wan[b] : n.lan[b],
                            next: _ => {
                                m == "wan" ? n.wan[b] = _ : n.lan[b] = _
                            }
                        })
                    },
                    f = (m, b) => m ? m.indexOf(b) : -1,
                    d = (m, b) => {
                        const v = m.target.value;
                        for (let k = 0; k < n.wan.length; k++) {
                            const x = f(n.wan[k].deviceNames, v);
                            x != -1 && n.wan[k].deviceNames.splice(x, 1)
                        }
                        for (let k = 0; k < n.lan.length; k++)
                            if (k != b) {
                                const x = f(n.lan[k].deviceNames, v);
                                x != -1 && n.lan[k].deviceNames.splice(x, 1)
                            } const g = f(n.lan[b].deviceNames, v);
                        g != -1 ? n.lan[b].deviceNames.splice(g, 1) : (n.lan[b].deviceNames === null && (n.lan[b].deviceNames = []), n.lan[b].deviceNames.push(v))
                    },
                    l = (m, b) => {
                        const v = m.target.value;
                        for (let g = 0; g < n.wan.length; g++)
                            if (g != b) {
                                const k = f(n.wan[g].deviceNames, v);
                                k != -1 && n.wan[g].deviceNames.splice(k, 1)
                            } for (let g = 0; g < n.lan.length; g++) {
                            const k = f(n.lan[g].deviceNames, v);
                            k != -1 && n.lan[g].deviceNames.splice(k, 1)
                        }
                        n.wan[b].deviceNames = [v]
                    },
                    u = () => T(this, null, function* () {
                        o.value = !0;
                        const m = [];
                        for (let _ = 0; _ < n.wan.length; _++) {
                            const v = n.wan[_];
                            m.push({
                                name: v.name,
                                proto: v.proto,
                                devices: v.deviceNames || [],
                                firewallType: v.firewallType
                            })
                        }
                        for (let _ = 0; _ < n.lan.length; _++) {
                            const v = n.lan[_];
                            if (v.name === "lan" && (!v.deviceNames || v.deviceNames.length == 0) && !confirm("LAN port is not associated with any physical network port, which may cause the router to lose connection. Do you want to continue?")) {
                                o.value = !1;
                                return
                            }
                            m.push({
                                name: v.name,
                                proto: v.proto,
                                devices: v.deviceNames || [],
                                firewallType: v.firewallType
                            })
                        }
                        const b = F.Loading("Saving...");
                        try {
                            const _ = yield S.Network.POSTInterfaceConfig.POST({
                                configs: m
                            });
                            if (_.data) {
                                const {
                                    success: v,
                                    result: g,
                                    error: k
                                } = _.data;
                                if (k) throw k;
                                (v || 0) == 0 && F.Success("Configuration successfully")
                            }
                        } catch (_) {
                            F.Error(`${_}`)
                        } finally {
                            b.Close(), o.value = !1
                        }
                    });
                return (m, b) => (i(), r("div", py, [fy, t("div", null, [t("div", my, [t("table", by, [t("colgroup", null, [(i(!0), r(L, null, j(w(a).devices, _ => (i(), r("col", vy))), 256)), gy, _y, hy]), t("thead", null, [t("tr", xy, [(i(!0), r(L, null, j(w(a).devices, _ => (i(), r("th", ky, [t("div", wy, [D(na, {
                    item: _
                }, null, 8, ["item"])])]))), 256)), yy, Fy, Ey])]), t("tbody", null, [(i(!0), r(L, null, j(w(n).lan, (_, v) => (i(), r("tr", Cy, [(i(!0), r(L, null, j(w(a).devices, g => (i(), r("td", $y, [z(t("input", {
                    type: "checkbox",
                    name: g.name,
                    value: g.name,
                    "onUpdate:modelValue": k => _.deviceNames = k,
                    onInput: k => d(k, v)
                }, null, 40, Dy), [
                    [Lt, _.deviceNames]
                ])]))), 256)), By, t("td", Yy, [t("b", null, h(_.name), 1)]), t("td", Ay, [t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    title: "Edit",
                    onClick: g => p("lan", v)
                }, "Edit", 8, Sy), v != 0 ? (i(), r("button", {
                    key: 0,
                    class: "cbi-button cbi-button-remove",
                    onClick: g => c("lan", v)
                }, "Delete ", 8, zy)) : C("", !0)])]))), 256)), t("tr", Py, [(i(!0), r(L, null, j(w(a).devices, _ => (i(), r("td", Ty))), 256)), Iy, Ly, t("td", {
                    class: "td cbi-value-field btns",
                    onClick: b[0] || (b[0] = _ => p("lan"))
                }, [D(Ze, {
                    class: "icon"
                })])]), (i(!0), r(L, null, j(w(n).wan, (_, v) => (i(), r("tr", My, [(i(!0), r(L, null, j(w(a).devices, g => (i(), r("td", Oy, [z(t("input", {
                    type: "checkbox",
                    name: g.name,
                    value: g.name,
                    "onUpdate:modelValue": k => _.deviceNames = k,
                    onInput: k => l(k, v)
                }, null, 40, Ny), [
                    [Lt, _.deviceNames]
                ])]))), 256)), qy, t("td", Vy, [t("b", null, h(_.name), 1)]), t("td", Gy, [t("button", {
                    class: "btn cbi-button cbi-button-apply",
                    title: "Edit",
                    onClick: g => p("wan", v)
                }, "Edit", 8, jy), v != 0 ? (i(), r("button", {
                    key: 0,
                    class: "cbi-button cbi-button-remove",
                    onClick: g => c("wan", v)
                }, "Delete", 8, Ry)) : C("", !0)])]))), 256)), t("tr", Uy, [(i(!0), r(L, null, j(w(a).devices, _ => (i(), r("td", Wy))), 256)), Hy, Zy, t("td", {
                    class: "td cbi-value-field btns",
                    onClick: b[1] || (b[1] = _ => p("wan"))
                }, [D(Ze, {
                    class: "icon"
                })])])])])]), t("div", Jy, [t("input", {
                    class: "btn cbi-button cbi-button-apply",
                    type: "button",
                    value: "Save & Apply",
                    onClick: u,
                    disabled: o.value
                }, null, 8, Xy)])])]))
            }
        });
    var Qy = Y(Ky, [
        ["__scopeId", "data-v-589588f0"]
    ]);
    const tF = () => window.vue_base || "/cgi-bin/luci/admin/quickstart",
        _a = Oa({
            history: Na(tF()),
            routes: [{
                name: "IndexPage",
                path: "/",
                meta: {
                    title: "console"
                },
                component: c9
            }, {
                name: "NetworkPage",
                path: "/network",
                meta: {
                    title: "Network Setup Wizard"
                },
                component: m9,
                children: [{
                    path: "",
                    component: X9
                }, {
                    path: "pppoe",
                    component: Eb
                }, {
                    path: "dhcp",
                    component: vv
                }, {
                    path: "gateway",
                    component: ng
                }]
            }, {
                name: "RaidPage",
                path: "/raid",
                meta: {
                    title: "raid\u5411\u5BFC"
                },
                component: wh
            }, {
                name: "SmartPage",
                path: "/smart",
                meta: {
                    title: "Smart Detection"
                },
                component: Bh,
                children: [{
                    path: "",
                    component: $w
                }, {
                    path: "task",
                    component: Mw
                }, {
                    path: "log",
                    component: Vw
                }]
            }, {
                path: "/interfaceconfig",
                component: Qy
            }]
        });
    _a.beforeEach((e, a) => (e.meta.title, !0));
    const dt = tt(no);
    dt.component("svg-menu", po);
    dt.component("svg-system", _o);
    dt.component("svg-download", Fo);
    dt.component("svg-store", So);
    dt.component("svg-info", Mo);
    dt.component("svg-disk", un);
    dt.component("svg-nav", bn);
    dt.component("progress-item", ta);
    dt.component("svg-view-show", Mn);
    dt.component("svg-view-hidden", jn);
    dt.component("article-item", Xn);
    dt.component("switch-box", ea);
    dt.component("editable-select", Tt);
    dt.use(aa);
    dt.use(_a);
    dt.use(qa());
    dt.mount("#app")
});
export default eF();