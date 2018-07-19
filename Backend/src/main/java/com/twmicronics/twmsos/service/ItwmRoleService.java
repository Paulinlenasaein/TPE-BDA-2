package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmRole;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmRoleService {
    
    /**
     * stocke un role passé en paramètre dans la base de données
     *
     * @param role role à stocker
     * @return le role enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmRole createOne(twmRole role) throws DataAccessException;

    /**
     * recherche un role ayant un nom du role donné
     *
     * @param rolename nom du role
     * @return le role correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmRole findOne(String rolename) throws DataAccessException;

    /**
     * supprime un role passé en paramètre, dans la base de données
     *
     * @param rolename nom du role à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(String rolename) throws DataAccessException;

    /**
     * met à jour un role passé en paramètre. Il doit être déjà présent
     * dans la BDD
     *
     * @param role role à mettre à jour
     * @return le role mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmRole updateOne(twmRole role) throws DataAccessException;

    /**
     * renvoie la liste des roles stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des roles de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmRole> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les roles ayant le nom passé en paramètre
     *
     * @param roleName nom du role à rechercher
     * @return les roles dont le nom est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmRole findOneByRoleName(String roleName) throws DataAccessException;
}
