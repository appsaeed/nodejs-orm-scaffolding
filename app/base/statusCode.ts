export default [
    {
        code: 100,
        name: "information",
        message:
            "100 codes are often interim responses for sharing connection status information. Not intended for final request or response action.",
    },
    {
        code: 200,
        name: "successful",
        message:
            "200 codes indicate successful responses usually this means the action requested by the client was received, understood and accepted successfully.",
    },
    {
        code: 300,
        name: "redirection",
        message:
            "300 codes are a class of responses that suggest the User-Agent must follow another course of action to obtain the complete requested resource.",
    },
    {
        code: 400,
        name: "client_error",
        message:
            "400 codes generally are error responses specifying an issue at the client’s end. Potentially a network issue.",
    },
    {
        code: 500,
        name: "server_error",
        message:
            "500 error codes indicate that an error or unresolvable request occurred on the server side, whether that is a proxy or the origin host.",
    },
    {
        code: 100,
        name: "continue",
        message:
            "The server has received the request headers, and the client should proceed to send the request body.",
    },
    {
        code: 101,
        name: "switching_protocols",
        message: "The requester has asked the server to switch protocols.",
    },
    {
        code: 102,
        name: "processing",
        message:
            "This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.",
    },
    {
        code: 103,
        name: "early_hints",
        message: "Used to return some response headers before final HTTP message.",
    },
    {
        code: 200,
        name: "ok",
        message:
            "The request is OK (this is the standard response for successful HTTP requests).",
    },
    {
        code: 201,
        name: "created",
        message: "The request has been fulfilled, and a new resource is created.",
    },
    {
        code: 202,
        name: "accepted",
        message:
            "The request has been accepted for processing, but the processing has not been completed.",
    },
    {
        code: 203,
        name: "non-authoritative_information",
        message:
            "The request has been successfully processed, but is returning information that may be from another source.",
    },
    {
        code: 204,
        name: "no_content",
        message:
            "The request has been successfully processed, but is not returning any content.",
    },
    {
        code: 205,
        name: "reset_content",
        message:
            "The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view.",
    },
    {
        code: 206,
        name: "partial_content",
        message:
            "The server is delivering only part of the resource due to a range header sent by the client.",
    },
    {
        code: 207,
        name: "multi-status",
        message:
            "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.",
    },
    {
        code: 208,
        name: "already_reported",
        message:
            "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.",
    },
    {
        code: 218,
        name: "this_is_fine_(apache_web_server)",
        message:
            "Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled.",
    },
    {
        code: 226,
        name: "im_used",
        message:
            "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
    },
    {
        code: 300,
        name: "multiple_choices",
        message:
            "A link list. The user can select a link and go to that location. Maximum five addresses.",
    },
    {
        code: 301,
        name: "moved_permanently",
        message: "The requested page has moved to a new URL.",
    },
    {
        code: 302,
        name: "found",
        message: "The requested page has moved temporarily to a new URL.",
    },
    {
        code: 303,
        name: "see_other",
        message: "The requested page can be found under a different URL.",
    },
    {
        code: 304,
        name: "not_modified",
        message:
            "Indicates the requested page has not been modified since last requested.",
    },
    {
        code: 306,
        name: "switch_proxy",
        message:
            'No longer used. Originally meant "Subsequent requests should use the specified proxy."',
    },
    {
        code: 307,
        name: "temporary_redirect",
        message: "The requested page has moved temporarily to a new URL.",
    },
    {
        code: 308,
        name: "resume_incomplete",
        message:
            "Used in the resumable requests proposal to resume aborted PUT or POST requests.",
    },
    {
        code: 400,
        name: "bad_request",
        message: "The request cannot be fulfilled due to bad syntax.",
    },
    {
        code: 401,
        name: "unauthorized",
        message:
            "The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided.",
    },
    {
        code: 402,
        name: "payment_required",
        message:
            "Not yet implemented by RFC standards, but reserved for future use.",
    },
    {
        code: 403,
        name: "forbidden",
        message:
            "The request was a legal request, but the server is refusing to respond to it.",
    },
    {
        code: 404,
        name: "not_found",
        message:
            "The requested page could not be found but may be available again in the future.",
    },
    {
        code: 405,
        name: "method_not_allowed",
        message:
            "A request was made of a page using a request method not supported by that page.",
    },
    {
        code: 406,
        name: "not_acceptable",
        message:
            "The server can only generate a response that is not accepted by the client.",
    },
    {
        code: 407,
        name: "proxy_authentication_required",
        message: "The client must first authenticate itself with the proxy.",
    },
    {
        code: 408,
        name: "request_timeout",
        message: "The server timed out waiting for the request.",
    },
    {
        code: 409,
        name: "conflict",
        message:
            "The request could not be completed because of a conflict in the request.",
    },
    {
        code: 410,
        name: "gone",
        message: "The requested page is no longer available.",
    },
    {
        code: 411,
        name: "length_required",
        message:
            'The "Content-Length" is not defined. The server will not accept the request without it.',
    },
    {
        code: 412,
        name: "precondition_failed",
        message:
            "The precondition given in the request evaluated to false by the server.",
    },
    {
        code: 413,
        name: "request_entity_too_large",
        message:
            "The server will not accept the request, because the request entity is too large.",
    },
    {
        code: 414,
        name: "request-uri_too_long",
        message:
            "The server will not accept the request, because the URL is too long. Occurs when you convert a POST request to a GET request with a long query information.",
    },
    {
        code: 415,
        name: "unsupported_media_type",
        message:
            "The server will not accept the request, because the media type is not supported.",
    },
    {
        code: 416,
        name: "requested_range_not_satisfiable",
        message:
            "The client has asked for a portion of the file, but the server cannot supply that portion.",
    },
    {
        code: 417,
        name: "expectation_failed",
        message:
            "The server cannot meet the requirements of the Expect request-header field.",
    },
    {
        code: 418,
        name: "i'm_a_teapot",
        message:
            'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.',
    },
    {
        code: 419,
        name: "page_expired_(laravel_framework)",
        message:
            "Used by the Laravel Framework when a CSRF Token is missing or expired.",
    },
    {
        code: 420,
        name: "method_failure_(spring_framework)",
        message:
            "A deprecated response used by the Spring Framework when a method has failed.",
    },
    {
        code: 421,
        name: "misdirected_request",
        message:
            "The request was directed at a server that is not able to produce a response (for example because a connection reuse).",
    },
    {
        code: 422,
        name: "unprocessable_entity",
        message:
            "The request was well-formed but was unable to be followed due to semantic errors.",
    },
    {
        code: 423,
        name: "locked",
        message: "The resource that is being accessed is locked.",
    },
    {
        code: 424,
        name: "failed_dependency",
        message:
            "The request failed due to failure of a previous request (e.g., a PROPPATCH).",
    },
    {
        code: 426,
        name: "upgrade_required",
        message:
            "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.",
    },
    {
        code: 428,
        name: "precondition_required",
        message: "The origin server requires the request to be conditional.",
    },
    {
        code: 429,
        name: "too_many_requests",
        message:
            "The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes.",
    },
    {
        code: 431,
        name: "request_header_fields_too_large",
        message:
            "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.",
    },
    {
        code: 440,
        name: "login_time-out",
        message: "The client's session has expired and must log in again. (IIS)",
    },
    {
        code: 444,
        name: "connection_closed_without_response",
        message:
            "A non-standard status code used to instruct nginx to close the connection without sending a response to the client, most commonly used to deny malicious or malformed requests.",
    },
    {
        code: 449,
        name: "retry_with",
        message:
            "The server cannot honour the request because the user has not provided the required information. (IIS)",
    },
    {
        code: 450,
        name: "blocked_by_windows_parental_controls",
        message:
            "The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.",
    },
    {
        code: 451,
        name: "unavailable_for_legal_reasons",
        message:
            "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.",
    },
    {
        code: 494,
        name: "request_header_too_large",
        message:
            "Used by nginx to indicate the client sent too large of a request or header line that is too long.",
    },
    {
        code: 495,
        name: "ssl_certificate_error",
        message:
            "An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.",
    },
    {
        code: 496,
        name: "ssl_certificate_required",
        message:
            "An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.",
    },
    {
        code: 497,
        name: "http_request_sent_to_https_port",
        message:
            "An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.",
    },
    {
        code: 498,
        name: "invalid_token_(esri)",
        message:
            "Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.",
    },
    {
        code: 499,
        name: "client_closed_request",
        message:
            "A non-standard status code introduced by nginx for the case when a client closes the connection while nginx is processing the request.",
    },
    {
        code: 500,
        name: "internal_server_error",
        message:
            "An error has occurred in a server side script, a no more specific message is suitable.",
    },
    {
        code: 501,
        name: "not_implemented",
        message:
            "The server either does not recognize the request method, or it lacks the ability to fulfill the request.",
    },
    {
        code: 502,
        name: "bad_gateway",
        message:
            "The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
    },
    {
        code: 503,
        name: "service_unavailable",
        message: "The server is currently unavailable (overloaded or down).",
    },
    {
        code: 504,
        name: "gateway_timeout",
        message:
            "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.",
    },
    {
        code: 505,
        name: "http_version_not_supported",
        message:
            "The server does not support the HTTP protocol version used in the request.",
    },
    {
        code: 506,
        name: "variant_also_negotiates",
        message:
            "Transparent content negotiation for the request results in a circular reference.",
    },
    {
        code: 507,
        name: "insufficient_storage",
        message:
            "The server is unable to store the representation needed to complete the request.",
    },
    {
        code: 508,
        name: "loop_detected",
        message:
            "The server detected an infinite loop while processing the request (sent instead of 208 Already Reported).",
    },
    {
        code: 509,
        name: "bandwidth_limit_exceeded",
        message:
            "The server has exceeded the bandwidth specified by the server administrator; this is often used by shared hosting providers to limit the bandwidth of customers.",
    },
    {
        code: 510,
        name: "not_extended",
        message:
            "Further extensions to the request are required for the server to fulfil it.",
    },
    {
        code: 511,
        name: "network_authentication_required",
        message: "The client needs to authenticate to gain network access.",
    },
    {
        code: 520,
        name: "unknown_error",
        message:
            'The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.',
    },
    {
        code: 521,
        name: "web_server_is_down",
        message: "The origin server has refused the connection from Cloudflare.",
    },
    {
        code: 522,
        name: "connection_timed_out",
        message:
            "Cloudflare could not negotiate a TCP handshake with the origin server.",
    },
    {
        code: 523,
        name: "origin_is_unreachable",
        message:
            "Cloudflare could not reach the origin server; for example, if the DNS records for the origin server are incorrect.",
    },
    {
        code: 524,
        name: "a_timeout_occurred",
        message:
            "Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.",
    },
    {
        code: 525,
        name: "ssl_handshake_failed",
        message:
            "Cloudflare could not negotiate a SSL/TLS handshake with the origin server.",
    },
    {
        code: 526,
        name: "invalid_ssl_certificate",
        message:
            "Used by Cloudflare and Cloud Foundry's gorouter to indicate failure to validate the SSL/TLS certificate that the origin server presented.",
    },
    {
        code: 527,
        name: "railgun_listener_to_origin_error",
        message:
            "Error 527 indicates that the request timed out or failed after the WAN connection had been established.",
    },
    {
        code: 530,
        name: "origin_dns_error",
        message:
            "Error 530 indicates that the requested host name could not be resolved on the Cloudflare network to an origin server.",
    },
    {
        code: 598,
        name: "network_read_timeout_error",
        message:
            "Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.",
    },
] as const;
