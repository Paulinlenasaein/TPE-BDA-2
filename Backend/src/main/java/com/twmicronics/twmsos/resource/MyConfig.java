package com.twmicronics.twmsos.resource;

import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

/**
 *
 * @author paulinlenasaein
 */
@Component
@ApplicationPath("/twmsos-api")
public class MyConfig extends ResourceConfig {

    public MyConfig() {
        register(twmUserResource.class);
        register(twmCommandeResource.class);
        register(twmEtatResource.class);
        register(twmFactureResource.class);
        register(twmPanProdResource.class);
        register(twmPanierResource.class);
        register(twmProduitResource.class);
        register(twmPromotionResource.class);
        register(twmRequeteResource.class);
        register(twmRoleResource.class);
        register(twmStatistiqueResource.class);
        register(twmTypeProduitResource.class);
    }
}
