package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmRole;
import org.springframework.stereotype.Repository;

/**
 *
 * @author paulinlenasaein
 */
@Repository
public interface ItwmRoleDao {

    /**
     * retourne le nombre d'utilisateurs ayant un rôle donné
     *
     * @param roleName role de l'utilisateur
     * @return un objet twmRole
     */
    public twmRole findByUserAndStatus(String roleName);
}
