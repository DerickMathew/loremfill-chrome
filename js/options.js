var Defaults = {
    password: 'p@ssw0rd',
    domains: 'host.test, host.local, host.invalid, example.com'
};

jQuery(document).ready(function() {
    fill_options();
    jQuery("[data-content]").popup();
    jQuery(".submit.button").click(save_options);
    jQuery(".reset.button").click(function() {
        jQuery("input[name='password']").val(Defaults.password);
        jQuery("input[name='domains']").val(Defaults.domains);
        save_options();
    });
});

function save_options() {
    var password = jQuery("input[name='password']").val();
    var domains = jQuery("input[name='domains']").val();
    var payload = {
        password: password,
        domains: domains
    }
    Store.set(payload, true);
}

function fill_options() {
    var password = jQuery("input[name='password']");
    Store.get('password', Defaults.password, password);
    var domains = jQuery("input[name='domains']");
    Store.get('domains', Defaults.domains, domains);
}