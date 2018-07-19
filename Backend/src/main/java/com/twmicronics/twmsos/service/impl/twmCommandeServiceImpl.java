package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmCommandeDao;
import com.twmicronics.twmsos.dao.ItwmEtatDao;
import com.twmicronics.twmsos.entities.twmCommande;
import com.twmicronics.twmsos.entities.twmPanier;
import com.twmicronics.twmsos.entities.twmUser;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmCommandeService;
import java.util.Date;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author paulinlenasaein
 */
@Service
@Transactional
public class twmCommandeServiceImpl implements ItwmCommandeService {
    
    @Autowired
    private ItwmCommandeDao commandeDao;
    
    @Autowired
    private ItwmEtatDao etatDao;

    @Override
    public twmCommande createOne(twmCommande commande) throws DataAccessException {
        return commandeDao.save(commande);
    }

    @Override
    public twmCommande findOne(String indexCom) throws DataAccessException {
        return commandeDao.findByIndexCom(indexCom);
    }

    @Override
    public void deleteOne(String indexCom) throws DataAccessException {
        twmCommande com = commandeDao.findByIndexCom(indexCom);
        if (com != null) {
            commandeDao.delete(com);
        } else {
            throw new WebApplicationException("Commande Inexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmCommande updateOne(twmCommande commande) throws DataAccessException {
        return commandeDao.save(commande);
    }

    @Override
    public Page<twmCommande> findAll(int from, int to) throws DataAccessException {
        return commandeDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexCom")));
    }

    @Override
    public Page<twmCommande> findAllByClient(twmUser client, int from, int to) throws DataAccessException {
        return commandeDao.findByClient(client, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexCom")));
    }

    @Override
    public twmCommande findAllByPanier(twmPanier panier, int from, int to) throws DataAccessException {
        return commandeDao.findByPanier(panier);
    }

    @Override
    public Page<twmCommande> findAllByEtat(int etat, int from, int to) throws DataAccessException {
        return commandeDao.findByEtat(etatDao.getOne(etat), PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexCom")));
    }

    @Override
    public Page<twmCommande> findAllByDateCommande(Date dateCommande, int from, int to) throws DataAccessException {
        return commandeDao.findByDateCommande(dateCommande, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexCom")));    
    }

    @Override
    public Page<twmCommande> findAllByDateLivraison(Date dateLivraison, int from, int to) throws DataAccessException {
        return commandeDao.findByDateLivraison(dateLivraison, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexCom")));
    }
    
    
}
