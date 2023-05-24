use anchor_lang::prelude::*;

use crate::{Creator, MetadataError};

pub fn validate_verified_creators(
    existing_creators: &Vec<Creator>,
    new_creators: &Vec<Creator>,
    authority: &Pubkey,
) -> std::result::Result<(), Error> {
    // check if any of the creators are verified
    for new_creator in new_creators {
        let mut creator_exists = false;
            for old_creator in existing_creators {
                if old_creator.address == new_creator.address {
                    creator_exists = true;
                    break;
                }
            }

        if !creator_exists {
            if new_creator.verified && new_creator.address != authority.key() {
                return Err(MetadataError::CannotAddVerifiedCreator.into());
            }
        }

        for old_creator in existing_creators {
            let mut creator_removed = true;
            for new_creator in new_creators {
                if new_creator.address == old_creator.address {
                    creator_removed = false;
                }
            }
            if creator_removed {
                if old_creator.verified && old_creator.address != authority.key() {
                    return Err(MetadataError::CannotRemoveVerifiedCreator.into());
                }
            }
        }
    }
    Ok(())
}
