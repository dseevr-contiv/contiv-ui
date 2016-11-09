/**
 * Created by hardik gandhi on 6/15/16.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Collection } from "./collection";
import { ContivGlobals } from "./contivglobals";
import {ApiService} from "../utils/apiservice";

@Injectable()
export class NetprofilesModel extends Collection {
    constructor(http: Http, apiService: ApiService) {
        super(http, ContivGlobals.NETPROFILES_ENDPOINT, apiService);
    }

    /**
     * Generate policy key to save policy on server
     * @param policy
     * @returns {string}
     */
   generateKey(policy) {
        return policy.tenantName + ':' + policy.profileName;
    }
}